### 打包并分发应用

使用Electron Forge进行快捷打包和分发应用
#### 执行命令
```bash
# 添加脚手架
npm install --save-dev @electron-forge/cli
npx electron-forge import
# 使用 Forge 的 make 命令来创建可分发的应用程序
npm run make
```

### 发布
```bash
# 只为当前主机操作系统架构发布一个单一的可分发文件
npm run publish
```
- 通过自动化工作流来发布你的应用比如 GitHub Actions, 通过它可以在各种云系统内包括 Ubuntu, macOS 和 Windows 上运行任务

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