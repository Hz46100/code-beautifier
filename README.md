# 代码美化与下载 Demo

## 介绍

这是一个基于 Node.js、Express 和 js-beautify 构建的前后端交互式代码美化应用。用户可在前端页面的文本区域输入 JavaScript 代码，点击“美化”按钮后，前端将代码通过 AJAX 发送到后端服务器。后端接收到代码后使用 js-beautify 进行美化处理，美化后的代码将返回至前端页面展示，并提供复制到剪贴板及下载为 `.js` 文件的功能。

### 文件结构概览

├── package.json
├── public
│ ├── index.html
│ └── client.js
└── server.js

### 如何运行

#### 1. 安装依赖

在项目根目录下执行以下命令：

```sh
npm init -y
npm install express js-beautify axios body-parser
```

#### 2. 启动后端服务

```sh
node server.js
```
