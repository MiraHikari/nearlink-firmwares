# nearlink-firmwares指南

## 介绍

星闪固件管理，是一款基于**Tauri + Rust**制作的整合了：串口功能、串口烧写、固件商店分发下载管理的，一款服务于**星闪用户和开发者之间联系**的管理工具软件。为解决用户间使用开发者开源的星闪项目时，需要耗时于编译配置后才能使用到通用固件，而开发者又无法及时更新固件的问题，我们开创的提出：*开发者只需要上传自己的项目固件，剩下的交给用户在我们这软件内，下载，烧写，重启开发板，一站式服务搞定所有操作*。

## 项目背景

星闪是中国原生的新一代近场距离无线连接通信解决方案，旨在为通信方面提供国产化解决方案。星闪已于2022年11月发布1.0标准以来，在2023年9月推出推向民用终端设备。发布时间已有一年有余，市面上的面向开发者设备也有十几款售卖。*但目前针对开发者的通用性固件，缺少宣传与更好的集中分享平台*，**而更多开发者决定分享的则是以“SDK与Demo项目一同开源”，缺少了对普通用户们的操作理解上的偏袒**。
因此我们决定，为了让星闪这一项技术，能够更多人**愿意使用进来，愿意低时间成本使用，愿意支持认可背后默默无闻的开发者们的星闪开发的努力**，我们决定做出这一份软件，照顾普通用户无法投入时间配置开发环境、开发者无法及时在社交论坛平台更新上传自己的固件更新下发给普通用户们的痛点。在这上面上传的每一份固件，都是经过了开发者的*允许认可*后，由我们对每一位开发者的Git推送上的固件、介绍、信息审核后，打包至**Github主仓库、Gitee镜像仓库、福州电信机房冷备仓库、福州联通机房镜像仓库、国内123网盘镜像仓库、国内**，照顾部分国内用户访问Github不佳状况，镜像仓库对每一次提交会自动同步，方便用户访问使用。通过软件刷新页面，即可让普通用户下载固件按作者提供的README、PDF说明教程等文件使用。**一站式服务普通用户与开发者**。
该项目为爱发电，并保持更新、维护固件商店生态发展，对国内机房的数据存储会做到**99.9%可用性**、**配备UPS电源**，努力做最棒的固件分享平台。

## 软件功能

- ✅固件商店页面，用于*开发者上传固件至主页面，引导用户下载使用*。
- ✅固件下载，用于*用户下载固件至本地*。
- ✅固件管理，用于*用户对下载内容进行管理、删除、重命名、本地导入*。
- ✅串口烧写，可支持**一键烧写**，用于*用户对下载的固件进行烧写至开发板*。
- ✅串口管理、串口调试，用于*用户对开发板进行串口通信、调试*。
- ✅串口帧速率获取，用于*开发者更多高级操作*。

## 鸣谢列表、赞助列表

> 见软件的支持我们页面。

## 支持的开发板：

> HiHope_NearLink_DK3863E_V03
> 润和WS63开发板，可以适用Hi3863固件。

> BearPi_Pico_H3863
> 小熊派Hi3863开发板，可以适用Hi3863固件。

> BearPi_Pico_H2821
> 小熊派Hi2821开发板，可以适用Hi2821固件。

> Haohanyh_Hi2821_Dev_Board
> 浩瀚银河Hi2821核心板，可以适用Hi2821固件。

> Haohanyh_Hi3863_NearLink_Gateway_Board
> 浩瀚银河Hi3863网关产品，可以适用Hi3863固件。

期待更多开发板能够添加进来OvO，我们允许个人创作产品以厂商名称支持您哦。

## 目录介绍

| 目录 | 介绍 |
| --------- | ------------------------------------------------------------      |
| firmwares | 存放readme.md固件介绍、metadata元数据、fwpkg格式固件文件             |
| tools     | 存放工具                                                           |

# 参与贡献一：提交固件

- 在windows/linux下安装git，并配置git账号、密码、邮箱等
> git config --global user.name "Your Name" // 配置用户名
> git config --global user.email "your.email@example.com" // 配置邮箱
> git config –list // 查看配置信息

- fork仓库，并clone到本地，并切换到main分支
> git clone https://github.com/yourname/nearlink-firmwares.git
> cd nearlink-firmwares
> git checkout main

- 添加远程仓库
> git remote add upstream https://github.com/yourname/nearlink-firmwares.git

- 拉取远程仓库最新代码
> git pull upstream main

- 在本地案例提交前，如果您是**开发者**，则需要您在firmwares文件夹下，创建自己的固件目录，目录命名虽然没有规则但烦请您*尽量使用英文命名、尽量不要留有BearPi, Hihope等星闪开发板厂商字样，尽量简短*。

创建目录后，您可以在您的文件夹下存放`.fwpkg`的星闪固件格式文件，`.pdf`的相关固件使用说明文件，`readme.md`的固件对应的项目介绍内容，`metadata.json`的元数据文件内容。其余格式文件的一切提交将会驳回。

Tips：**请注意，您提交的一切内容，都应当遵守中国大陆相关法律法规，一切说明文件和介绍内容、元数据内容里，切勿存在违法内容。星闪固件请勿制作损坏他人物品以目的、制作有损现实场景的通信扰乱等内容。**

- 案例提交前，请您在**您的文件夹下**的`metadata.json`文件，添加对应的字段，字段描述及举例如下：

```json
{
    "online": true,                                                         //是否上线，true为上线，false为下线 
    "imageUrl": "https://s2.loli.net/2024/11/10/y9GvWc3wh8NpgrO.jpg",       //主页显示的固件项目介绍图片，如果您有做的话您可以添加您的项目介绍图片
    "packageName": "星闪聊天固件",                                           //主页显示的固件项目名称
    "description": "为Android、Web多场景下提供星闪通信能力与聊天功能。",        //主页显示的固件项目简短介绍，建议控制字数，因为我们允许您提交readme.md文件补充说明。
    "author": "Lin.Meng",                                                   //作者名称，请符合法律法规
    "authorAvatar": "https://avatars.githubusercontent.com/u/51528915?v=4", //作者头像，您可以选用Github Avatar
    "needCode": false,                                                      //是否需要邀请码？是否需要内购？
    "categories": [
        "通信功能"                                                          //该分类我们目前只允许填写：通信功能、物联网、娱乐功能、测距尝鲜、实体产品
    ],
    "chips": [
        "Hi2821",                                                           //该分类我们目前只允许填写：Hi2821 Hi3863
        "Hi3863"                                                            //如果您已经测试过其他星闪芯片使用WS63Flash.exe烧写文件没问题情况下，联系我。
    ],
    "brands": [
        "润和",                                                             //该分类我们目前只允许填写：润和、小熊派、浩瀚银河、华为海思、利尔达、安信可
        "小熊派",                                                           //如果您已经有其他厂商名称想填写的情况下，联系我。
        "浩瀚银河"                                                          //如果您是厂商，或者您为个人创作者，可以留下您的（厂商/个人）名字作为厂商分类，同时联系我说明原因。
    ],
    "files": [
        {
            "name": "Hi2821服务端固件",                                     //需要添加下载的文件，按格式填写，芯片型号+有无区分客户端服务端+名称+固件
            "filename": "bs21_all_in_one_server.fwpkg"                     //fwpkg文件格式之所以需要对应，软件内有一键烧写功能，会匹配.fwpkg文件。
        },
        {
            "name": "Hi2821客户端固件",
            "filename": "bs21_all_in_one_client.fwpkg"
        },
        {
            "name": "Hi3863服务端固件",
            "filename": "ws63-liteos-app_all_server.fwpkg"
        },
        {
            "name": "Hi3863客户端固件",
            "filename": "ws63-liteos-app_all_client.fwpkg"
        }
    ]
}
```
然后慢慢填充您的文件，请注意检查。

- 案例提交到自己fork的仓库后，创建Pull requests，创建在**Github**上。并填写对应内容，内容格式如下：
```markdown
# 标题(仅允许以下内容)
> feat: Create XXXX New Firmware
# 内容(自己写,不写我就会检查您的Readme是否存在, 否则会驳回您的提交)
> 可以用中文，也可以用英文，只需要您有写。您不写的情况下我们会检查您是否提交了readme.md文件。

# Reviewers审核人
> 请@Hny0305Lin，您不选择的情况下我们会驳回您的提交。
```

如果您不会这一步，请您参考我们的HelloWorld提交，地址[点我打开](https://github.com/MiraHikari/nearlink-firmwares/pull/1)

- 最后一步，创建Issue，创建在**Github**上。并填写对应内容，内容格式如下：
```markdown
# 标题(上面怎么写，这里去掉feat:后就可以了，直接相当于复制粘贴去掉feat)
> Create XXXX New Firmware
# 内容(写下面的)
> 该issue将捆绑项目，提交固件内容信息。

# Assignees受让人
> 可以@Hny0305Lin，也可以不用
# 提交好Developments
记得选自己fork的项目分支
```

如果您不会这一步，请您参考我们的HelloWorld Issue提交，地址[点我打开](https://github.com/MiraHikari/nearlink-firmwares/issues/2)

- 最后，等待审核，审核通过后，您就可以在星闪固件管理内的，固件云市场页面，能看到您的固件了。

# 参与贡献二：提交问题

如果您在使用我们软件过程中，遇到任何问题，都可以提交Issue，格式如下：

```markdown
# 标题(仅允许以下内容)
> Report Bug:出现了XX问题导致了XX问题。
# 内容(不怕你字多，怕你写不全、写不明确，请百度Google，了解一下提问の艺术)
> 如上。
> 冷知识：软件有问题，我们是最着急的，您的反馈我们都会看，长时间不回复您的Issue或许是我们在修复的路上呢。烦请等待回复，使用期间如果您还发生其他问题，可以在提交Issue下继续提交。

# Assignees受让人
> 可以@Hny0305Lin，也可以不用
```

或者您可以发送邮件至[MiraHikari的邮箱](mailto:mirahikari@gcxstudio.cn) 和 [Lin.Meng的邮箱](lmj-mc@outlook.com)，跟上面一样。

# 参与贡献三：举报固件

如果您发现固件内含有违法违规内容，请提交Issue，格式如下：

```markdown
# 标题(仅允许以下内容)
> Report Firmware:举报XX固件。
# 内容(请详细描述，我们会在24小时内审核并处理)
> 如上。

# Assignees受让人
> 可以@Hny0305Lin，也可以不用
```

或者您可以发送邮件至[MiraHikari的邮箱](mailto:mirahikari@gcxstudio.cn) 和 [Lin.Meng的邮箱](lmj-mc@outlook.com)，跟上面一样。
