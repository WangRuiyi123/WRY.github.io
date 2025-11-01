# GitHub仓库连接指南

## 当前状态

检测到您的系统中尚未安装Git，因此无法直接在当前环境中连接到GitHub仓库 `https://github.com/WangRuiyi123/study-website.git`。

## 手动连接步骤

### 1. 安装Git

首先，您需要在您的计算机上安装Git：

1. 访问 [Git官方下载页面](https://git-scm.com/download/win)
2. 下载并安装适合您Windows系统的Git版本
3. 安装过程中建议选择默认选项
4. 安装完成后，重新启动您的计算机

### 2. 配置Git

打开命令提示符(cmd)或Git Bash，配置您的Git身份：

```bash
# 设置您的用户名
git config --global user.name "您的用户名"

# 设置您的邮箱
git config --global user.email "您的邮箱@example.com"
```

### 3. 连接到GitHub仓库

在项目目录（d:\桌面\网页设计）中执行以下命令：

```bash
# 导航到项目目录
cd d:\桌面\网页设计

# 初始化Git仓库（如果尚未初始化）
git init

# 添加远程仓库
git remote add origin https://github.com/WangRuiyi123/study-website.git

# 拉取远程代码（如果仓库已有内容）
git pull origin main

# 添加所有项目文件
git add .

# 提交更改
git commit -m "初始提交"

# 推送到GitHub仓库
git push -u origin main
```

### 4. 验证连接

推送完成后，您可以访问您的GitHub仓库 `https://github.com/WangRuiyi123/study-website.git` 确认文件已成功上传。

## 常见问题

### 问题1：推送失败，提示权限不足

解决方案：您需要确保您有该GitHub仓库的写入权限。如果没有，您可以：
1. 联系仓库所有者添加您为协作者
2. 或者复刻(fork)该仓库，然后创建拉取请求(pull request)

### 问题2：Git命令无法识别

解决方案：确保Git已正确安装并且添加到了系统环境变量中。您可以重新启动命令行工具或计算机来刷新环境变量。

### 问题3：拉取冲突

解决方案：如果远程仓库已有内容，拉取时可能会发生冲突。您可以使用以下命令解决：

```bash
# 强制拉取并覆盖本地文件（谨慎使用！）
git fetch --all
git reset --hard origin/main
```

## 其他选项

如果您不想使用命令行，也可以使用以下工具：

1. **GitHub Desktop** - GitHub官方的图形化客户端
2. **VS Code的Git集成** - 如果您使用VS Code，可以通过内置的Git功能管理仓库

希望这个指南对您有所帮助！如果您在连接过程中遇到任何问题，请参考Git官方文档或寻求技术支持。