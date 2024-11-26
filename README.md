# 星闪固件管理

<p align="center">
    <img src="https://raw.githubusercontent.com/MiraHikari/nearlink-firmwares/main/docs/1.png" alt="星闪固件管理"/>
</p>

<p align="center">
  <a href="https://github.com/MiraHikari/nearlink-firmwares/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/MiraHikari/nearlink-firmwares" alt="license"/>
  </a>
  <a href="https://github.com/MiraHikari/nearlink-firmwares/issues">
    <img src="https://img.shields.io/github/issues/MiraHikari/nearlink-firmwares" alt="issues"/>
  </a>
  <a href="https://github.com/MiraHikari/nearlink-firmwares/network/members">
    <img src="https://img.shields.io/github/forks/MiraHikari/nearlink-firmwares" alt="forks"/>
  </a>
  <a href="https://github.com/MiraHikari/nearlink-firmwares/stargazers">
    <img src="https://img.shields.io/github/stars/MiraHikari/nearlink-firmwares" alt="stars"/>
  </a>
</p>

[English](./README_EN.md) | 简体中文

## 📖 简介

星闪固件管理是一款基于**Tauri + Rust**开发的一站式固件管理工具,整合了串口功能、串口烧写、固件商店分发下载管理等功能。

本项目旨在搭建星闪用户和开发者之间的桥梁,让用户能够便捷地使用开源固件,同时也让开发者能够及时发布更新。作为中国原生的新一代近场距离无线连接通信解决方案,星闪自2022年发布1.0标准以来,已经在多个领域得到应用。我们希望通过这个平台,让更多人能够便捷地参与到星闪生态的建设中来。

## 🎯 主要功能

- ✨ **固件商店** - 开发者上传固件,用户一键下载使用
- 📦 **固件管理** - 本地固件的管理、删除、重命名、导入
- ⭐ **固件收藏** - 收藏常用固件,快速访问
- 🔧 **串口烧写** - 支持一键烧写,海思烧写和第三方工具烧写
- 🖥️ **串口调试** - 串口通信、调试、帧速率获取
- ⚡ **快捷命令** - AT固件常用命令收藏
- ☁️ **云数据源** - 支持国内外多个镜像源

## 🚀 快速开始

### 支持的开发板

| 开发板型号 | 支持的固件 | 厂商 |
|------------|------------|------|
| HiHope_NearLink_DK3863_V03 | Hi3863固件 | 润和 |
| Hihope_HH-D03 | Hi2821固件 | 润和 |
| BearPi_Pico_H3863 | Hi3863固件 | 小熊派 |
| BearPi_Pico_H2821 | Hi2821固件 | 小熊派 |
| BearPi_EBM_H63 | EBM_H63加密固件 | 小熊派 |
| Haohanyh_Hi2821_Dev_Board | Hi2821固件 | 浩瀚银河 |
| Haohanyh_Hi3863_NearLink_Gateway_Board | Hi3863固件 | 浩瀚银河 |

### 目录结构

```
.
├── firmwares/                    # 固件相关文件
│   ├── project_name/            # 具体项目目录
│   │   ├── *.fwpkg             # 固件文件
│   │   ├── *.pdf               # 说明文档
│   │   ├── *.json              # 命令集合
│   │   ├── readme.md           # 项目说明
│   │   └── metadata.json       # 项目元数据
└── tools/                       # 工具文件
```

## 🤝 参与贡献

我们欢迎任何形式的贡献,主要包括:

### 1. 提交固件

开发者可以通过以下步骤提交固件:

1. Fork 本仓库
2. 在 `firmwares` 目录下创建你的固件目录
3. 添加固件文件(`.fwpkg`)、说明文档和元数据
4. 提交 Pull Request

详细规范请参考[固件提交指南](docs/firmware-contribution.md#固件提交指南)

### 2. 分享串口命令

您可以通过以下方式分享常用的串口命令:

1. 使用软件的图形界面编辑命令集
2. 导出命令集 JSON 文件
3. 在固件目录的 metadata.json 中添加 serialcuts 字段:

```json
{
    // ... 其他固件元数据字段
    "serialcuts": [
        {
            "name": "命令集合名称",           // 例如: "HH-D03 多命令集合 专业版"
            "filename": "命令集合文件名.json"  // 对应固件目录下的JSON文件
        }
    ]
}
```

4. 将命令集 JSON 文件放在对应的固件目录下

注意：命令集应当与固件配套使用，建议：
- 提供清晰的命令分类
- 包含必要的使用说明
- 确保命令的准确性
- 可以配套提供PDF格式的命令手册

### 3. 问题反馈

发现 bug 或有新功能建议?请[提交 Issue](https://github.com/MiraHikari/nearlink-firmwares/issues/new)

### 4. 举报违规内容

如发现违规内容,请通过以下方式举报:
- 提交 Issue
- 发送邮件至 mirahikari@gcxstudio.cn 或 lmj-mc@outlook.com

### 5. 镜像站贡献

为了提供更好的下载体验,我们欢迎提供镜像站服务。要求:

- 保证 7x24 小时可用性(>92.87%)
- 5分钟内同步 Github 仓库
- 遵守相关法律法规

## 💝 鸣谢

特别感谢以下合作伙伴的支持:

- [南京小熊派智能科技有限公司](https://bearpi.cn/) - 提供开发板支持
- [江苏润和软件股份有限公司](https://www.hoperun.com/) - 提供技术支持
- [所有赞助者](docs/sponsors.md)

## 📄 开源协议

本项目采用 [MIT](LICENSE) 开源协议。

## 📮 联系我们

- 邮箱: mirahikari@gcxstudio.cn / lmj-mc@outlook.com
- B站: [视频教程](https://www.bilibili.com/video/BV1YmmxYXEd3)
- 论坛: [海思论坛](https://developers.hisilicon.com/postDetail?tid=0206166650494929002)

## 🌟 支持我们

如果您觉得这个项目对您有帮助,欢迎:

- ⭐ 给项目点个 star
- 🔄 分享给更多的人
- 💰 赞助支持我们的开发

我们承诺:
- 所有功能永久免费
- 拒绝商业广告
- 持续更新维护

赞助方式:
- 微信支付
- USDT (ERC20/TRC20)

所有赞助者都将被记录在[赞助者名单](docs/sponsors.md)中。
