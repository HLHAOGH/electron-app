const { app, BrowserWindow } = require('electron');
const path = require('path');
require('update-electron-app')(); // 自动应用发布下载更新程序

// 创建浏览器窗口
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html');
  // 打开开发工具
  // mainWindow.webContents.openDevTools()
}

// 在 app 模块的 ready 事件被激发后才能创建浏览器窗口
app.whenReady().then(() => {
  createWindow();

  // 如果没有窗口打开则打开一个窗口 (macOS)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
})

// 关闭所有窗口通常会完全退出一个应用程序
app.on('window-all-closed', () => {
  // 在 macOS(darwin) 上运行程序
  if (process.platform !== 'darwin') {
    app.quit();
  }
})