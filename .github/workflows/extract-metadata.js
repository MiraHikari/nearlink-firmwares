const fs = require('fs').promises;
const path = require('path');

// 使用相对于工作目录的路径
const rootDir = process.cwd();
const firmwareDir = path.join(rootDir, 'firmwares');

// 定义输出文件配置
const OUTPUT_CONFIGS = [
  {
    filename: 'metadata-collections.json',
    urlPrefix: process.env.GITHUB_URL_PREFIX || 'https://raw.githubusercontent.com/${repoUser}/${repoName}/${branch}',
    urlSuffix: process.env.GITHUB_URL_SUFFIX || ''
  },
  {
    filename: 'metadata-collections_gitee.json',
    urlPrefix: process.env.GITEE_URL_PREFIX || 'https://gitee.com/blue-star-project/nearlink-firmwares/raw/main',
    urlSuffix: process.env.GITEE_URL_SUFFIX || ''
  }
];

async function processMetadata(config) {
  // 获取仓库信息，使用环境变量
  const repoUser = process.env.GITHUB_REPOSITORY_OWNER;
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const branch = process.env.GITHUB_REF_NAME;

  // 处理 URL 前缀中的变量
  const urlPrefix = config.urlPrefix
    .replace('${repoUser}', repoUser)
    .replace('${repoName}', repoName)
    .replace('${branch}', branch);

  // 初始化结果对象
  const result = {};

  // 遍历 firmware 目录
  const folders = await fs.readdir(firmwareDir);
  for (const folder of folders) {
    const folderPath = path.join(firmwareDir, folder);
    const metadataPath = path.join(folderPath, 'metadata.json');
    const readmePath = path.join(folderPath, 'readme.md');

    try {
      const stats = await fs.stat(folderPath);
      if (!stats.isDirectory()) continue;

      if (await fs.access(metadataPath).then(() => true).catch(() => false)) {
        const metadataContent = await fs.readFile(metadataPath, 'utf-8');
        try {
          const metadata = JSON.parse(metadataContent);

          if (metadata.online === false) {
            console.log(`Skipping ${folder}: firmware is offline`);
            continue;
          }

          if (metadata.files && Array.isArray(metadata.files)) {
            metadata.files = metadata.files.map(file => ({
              ...file,
              rawLink: `${urlPrefix}/firmwares/${folder}/${file.filename}${config.urlSuffix}`
            }));
            delete metadata.files.filename;

            // 检查是否存在 readme.md
            if (await fs.access(readmePath).then(() => true).catch(() => false)) {
              metadata.readmeFile = `${urlPrefix}/firmwares/${folder}/readme.md${config.urlSuffix}`;
            }

            result[folder] = metadata;
          }
        } catch (error) {
          console.error(`Invalid JSON in ${metadataPath}:`, error);
        }
      }
    } catch (error) {
      console.error(`Error processing ${folder}:`, error);
    }
  }

  return result;
}

async function main() {
  try {
    // 检查 firmware 目录是否存在
    try {
      await fs.access(firmwareDir);
    } catch (error) {
      console.error('Firmware directory not found:', error);
      process.exit(1);
    }

    // 处理所有配置
    for (const config of OUTPUT_CONFIGS) {
      const result = await processMetadata(config);
      const outputPath = path.join(rootDir, config.filename);
      await fs.writeFile(outputPath, JSON.stringify(result, null, 2));
      console.log(`Generated ${config.filename} successfully`);
    }

    console.log('All metadata processing completed successfully');

  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

main();
