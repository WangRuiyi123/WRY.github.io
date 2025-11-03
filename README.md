# 学习历程网站

这是一个用于记录学习过程、分享经验的学习社区平台。

## 项目功能
- 记录学习内容和进度
- 分享学习心得
- 查看他人学习案例

## 连接GitHub仓库

要将此项目连接到GitHub仓库 `https://github.com/WangRuiyi123/study-website.git`，您需要先在系统中安装Git。

### 安装Git
1. 从官方网站下载并安装Git：https://git-scm.com/download/win
2. 安装完成后，重新打开终端
3. 按照以下步骤连接GitHub仓库：

```bash
# 在项目目录初始化Git（如果尚未初始化）
git init

# 添加远程仓库
git remote add origin https://github.com/WangRuiyi123/study-website.git

# 拉取远程代码（如果需要）
git pull origin main

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 推送到远程仓库
git push -u origin main
```

## 项目文件结构
- `index.html` - 网站首页
- `about.html` - 关于我们页面
- `categories.html` - 学习案例分类页面
- `case-detail.html` - 案例详情页面
- `css/style.css` - 样式文件
- `js/script.js` - JavaScript脚本
- `images/` - 图片资源目录

## 网站特点
- 橙色主题设计
- 响应式布局
- 简洁直观的用户界面
- 支持登录注册功能