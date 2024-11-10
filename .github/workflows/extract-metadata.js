const fs = require('fs').promises;
const path = require('path');

// 使用相对于工作目录的路径
const rootDir = process.cwd();
const firmwareDir = path.join(rootDir, 'firmwares');
const outputFile = path.join(rootDir, 'metadata-collections.json');

async function main() {
  try {
    // 获取仓库信息，使用环境变量
    const repoUser = process.env.GITHUB_REPOSITORY_OWNER;
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
    const currentBranch = process.env.GITHUB_REF_NAME;

    // 初始化结果对象
    const result = {};

    // 检查 firmware 目录是否存在
    try {
      await fs.access(firmwareDir);
    } catch (error) {
      console.error('Firmware directory not found:', error);
      process.exit(1);
    }

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

            // 检查 online 状态，如果明确设置为 false 则跳过
            if (metadata.online === false) {
              console.log(`Skipping ${folder}: firmware is offline`);
              continue;
            }

            if (metadata.files && Array.isArray(metadata.files)) {
              metadata.files = metadata.files.map(file => ({
                ...file,
                rawLink: `https://raw.githubusercontent.com/${repoUser}/${repoName}/${currentBranch}/firmwares/${folder}/${file.filename}`
              }));
              delete metadata.files.filename;

              // 检查是否存在 readme.md
              if (await fs.access(readmePath).then(() => true).catch(() => false)) {
                metadata.readmeFile = `https://raw.githubusercontent.com/${repoUser}/${repoName}/${currentBranch}/firmwares/${folder}/readme.md`;
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

    // 写入 JSON 文件到根目录
    await fs.writeFile(outputFile, JSON.stringify(result, null, 2));

    // 在控制台输出处理好的元数据
    console.log('\n=== Processed Metadata Collection ===\n');
    console.log(JSON.stringify(result, null, 2));
    console.log('\n=== End of Metadata Collection ===\n');

    console.log('Metadata processing completed successfully');
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

main();
