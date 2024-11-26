# StarFlash Firmware Management

<p align="center">
    <img src="https://raw.githubusercontent.com/MiraHikari/nearlink-firmwares/main/docs/1.png" alt="StarFlash Firmware Management" width="200"/>
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

[中文](./README.md) | English

## 📖 Introduction

StarFlash Firmware Management is a one-stop firmware management tool based on **Tauri + Rust**, integrating features such as serial port functionality, firmware flashing, firmware store distribution, and download management.

This project aims to build a bridge between StarFlash users and developers, allowing users to conveniently use open-source firmware while enabling developers to promptly release updates. As the new generation of domestic near-field wireless communication solutions in China, StarFlash has been applied in multiple fields since the release of the 1.0 standard in 2022. We hope that through this platform, more people can conveniently participate in building the StarFlash ecosystem.

## 🎯 Key Features

- ✨ **Firmware Store** - Developers upload firmware, users can download and use with one click
- 📦 **Firmware Management** - Manage, delete, rename, and import local firmware
- ⭐ **Firmware Favorites** - Favorite commonly used firmware for quick access
- 🔧 **Serial Port Flashing** - Supports one-click flashing, HiSilicon flashing, and third-party tool flashing
- 🖥️ **Serial Port Debugging** - Serial communication, debugging, and frame rate acquisition
- ⚡ **Quick Commands** - AT firmware common command favorites
- ☁️ **Cloud Data Sources** - Supports multiple domestic and international mirror sources

## 🚀 Quick Start

### Supported Development Boards

| Development Board Model | Supported Firmware | Manufacturer |
|-------------------------|--------------------|--------------|
| HiHope_NearLink_DK3863_V03 | Hi3863 Firmware | Runhe |
| Hihope_HH-D03 | Hi2821 Firmware | Runhe |
| BearPi_Pico_H3863 | Hi3863 Firmware | BearPi |
| BearPi_Pico_H2821 | Hi2821 Firmware | BearPi |
| BearPi_EBM_H63 | EBM_H63 Encrypted Firmware | BearPi |
| Haohanyh_Hi2821_Dev_Board | Hi2821 Firmware | Haohanyh Galaxy |
| Haohanyh_Hi3863_NearLink_Gateway_Board | Hi3863 Firmware | Haohanyh Galaxy |

### Directory Structure

```
.
├── firmwares/                    # Firmware related files
│   ├── project_name/            # Specific project directory
│   │   ├── *.fwpkg             # Firmware files
│   │   ├── *.pdf               # Documentation
│   │   ├── *.json              # Command collections
│   │   ├── readme.md           # Project Description
│   │   └── metadata.json       # Project Metadata
└── tools/                       # Tool files
```

## 🤝 Contributing

We welcome any form of contribution, mainly including:

### 1. Submit Firmware

Developers can submit firmware by following these steps:

1. Fork this repository
2. Create your firmware directory under the `firmwares` directory
3. Add firmware files (`.fwpkg`), documentation, and metadata
4. Submit a Pull Request

Refer to the [Firmware Submission Guide](docs/firmware-contribution.md#Firmware%20Submission%20Guide) for detailed specifications.

### 2. Share Serial Commands

You can share common serial commands in the following ways:

1. Use the software's graphical interface to edit the command set
2. Export the command set as a JSON file
3. Add a `serialcuts` field in the `metadata.json` of the firmware directory:

```json
{
    // ... other firmware metadata fields
    "serialcuts": [
        {
            "name": "Command Set Name",           // e.g., "HH-D03 Multiple Command Set Professional Edition"
            "filename": "command_set_filename.json"  // The corresponding JSON file in the firmware directory
        }
    ]
}
```

4. Place the command set JSON file in the corresponding firmware directory

**Note:** The command set should be used in conjunction with the firmware. It is recommended to:
- Provide clear command classifications
- Include necessary usage instructions
- Ensure command accuracy
- Optionally provide command manual in PDF format

### 3. Report Issues

Found a bug or have a feature suggestion? Please [submit an Issue](https://github.com/MiraHikari/nearlink-firmwares/issues/new).

### 4. Report Violations

If you find any content that violates Chinese laws and regulations, please contact us through the above email addresses:
- Submit an Issue
- Send an email to mirahikari@gcxstudio.cn or lmj-mc@outlook.com

### 5. Mirror Site Contribution

To provide a better download experience, we welcome contributions for mirror site services. Requirements:
- Ensure 24x7 availability (>92.87%)
- Synchronize the GitHub repository within 5 minutes
- Comply with relevant laws and regulations

## 💝 Acknowledgements

Special thanks to the following partners for their support:

- [Nanjing BearPi Intelligent Technology Co., Ltd.](https://bearpi.cn/) - Providing development board support
- [Jiangsu Runhe Software Co., Ltd.](https://www.hoperun.com/) - Providing technical support
- [All Sponsors](docs/sponsors.md)

## 📄 License

This project is licensed under the [MIT](LICENSE) License.

## 📮 Contact Us

- Email: mirahikari@gcxstudio.cn / lmj-mc@outlook.com
- Bilibili: [Video Tutorials](https://www.bilibili.com/video/BV1YmmxYXEd3)
- Forum: [HiSilicon Forum](https://developers.hisilicon.com/postDetail?tid=0206166650494929002)

## 🌟 Support Us

If you find this project helpful, feel free to:

- ⭐ Star the project
- 🔄 Share it with more people
- 💰 Sponsor and support our development

We pledge:
- All features are free forever
- Reject commercial ads
- Continuous updates and maintenance

**Sponsorships:**
- WeChat Pay
- USDT (ERC20/TRC20)

All sponsors will be recorded in the [Sponsor List](docs/sponsors.md).
