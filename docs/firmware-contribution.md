# 固件提交指南 | Firmware Contribution Guidelines

[English](#firmware-contribution-guidelines) | [简体中文](#固件提交指南)

## 固件提交指南

### 目录结构要求

```
firmwares/
└── your_project_name/      # 您的项目目录
    ├── *.fwpkg            # 固件文件
    ├── *.pdf              # 说明文档（可选）
    ├── readme.md          # 项目说明
    └── metadata.json      # 项目元数据
```

### metadata.json 规范

```json
{
    "online": true,                                                         // 是否上线
    "imageUrl": "https://example.com/image.jpg",                           // 项目介绍图片
    "packageName": "项目名称",                                              // 项目名称
    "description": "项目简介",                                              // 简短介绍
    "author": "作者名称",                                                   // 作者名称
    "authorAvatar": "https://avatars.githubusercontent.com/u/xxx",          // 作者头像
    "needCode": false,                                                      // 是否需要邀请码
    "categories": [
        "通信功能"                                                          // 分类：通信功能/移动终端/国产替代/物联网/智能家居/娱乐功能/测距尝鲜/实体产品
    ],
    "chips": [
        "Hi2821",                                                          // 支持芯片：Hi2821/Hi2825/Hi3863/Hi3873
        "Hi3863"
    ],
    "brands": [
        "润和",                                                            // 支持厂商：润和/小熊派/开鸿/诚迈科技/华为海思/利尔达/安信可/天工聚创/浩瀚银河
        "小熊派"
    ],
    "files": [
        {
            "name": "固件名称",                                            // 文件显示名称
            "filename": "firmware.fwpkg"                                   // 实际文件名
        }
    ],
    "serialcuts": [                                                       // 串口命令集（可选）
        {
            "name": "命令集名称",
            "filename": "commands.json"
        }
    ]
}
```

### readme.md 规范

请在 readme.md 中包含以下内容：

1. 项目简介
2. 功能特点
3. 支持的开发板
4. 使用说明
5. 注意事项
6. 更新日志
7. 许可证信息

### 提交流程

1. Fork 仓库
2. 创建项目目录
3. 添加必要文件
4. 提交 Pull Request
5. 等待审核

### 审核标准

1. 内容合规性
2. 文档完整性
3. 固件可用性
4. 命令集准确性

## Firmware Contribution Guidelines

### Directory Structure

```
firmwares/
└── your_project_name/      # Your project directory
    ├── *.fwpkg            # Firmware files
    ├── *.pdf              # Documentation (optional)
    ├── readme.md          # Project description
    └── metadata.json      # Project metadata
```

### metadata.json Specification

```json
{
    "online": true,                                                         // Online status
    "imageUrl": "https://example.com/image.jpg",                           // Project image
    "packageName": "Project Name",                                         // Project name
    "description": "Project description",                                  // Brief description
    "author": "Author Name",                                              // Author name
    "authorAvatar": "https://avatars.githubusercontent.com/u/xxx",         // Author avatar
    "needCode": false,                                                     // Invitation code required
    "categories": [
        "Communication"                                                    // Category: Communication/Mobile/Alternative/IoT/Smart Home/Entertainment/Distance/Product
    ],
    "chips": [
        "Hi2821",                                                         // Supported chips: Hi2821/Hi2825/Hi3863/Hi3873
        "Hi3863"
    ],
    "brands": [
        "HopeRun",                                                        // Supported brands: HopeRun/BearPi/Haohanyh/HiSilicon/Lierda/Ai-Thinker
        "BearPi"
    ],
    "files": [
        {
            "name": "Firmware Name",                                      // Display name
            "filename": "firmware.fwpkg"                                  // Actual filename
        }
    ],
    "serialcuts": [                                                      // Serial command sets (optional)
        {
            "name": "Command Set Name",
            "filename": "commands.json"
        }
    ]
}
```

### readme.md Requirements

Please include the following in readme.md:

1. Project Introduction
2. Features
3. Supported Boards
4. Usage Instructions
5. Notes
6. Changelog
7. License Information

### Submission Process

1. Fork Repository
2. Create Project Directory
3. Add Required Files
4. Submit Pull Request
5. Wait for Review

### Review Criteria

1. Content Compliance
2. Documentation Completeness
3. Firmware Functionality
4. Command Set Accuracy
