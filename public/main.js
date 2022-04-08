const { app, BrowserWindow } = require('electron');

const path = require('path');
// const isDev = require('electron-is-dev');

require('@electron/remote/main').initialize();

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 1366,
    minHeight: 768,
    width: 1366,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
    autoHideMenuBar: true, // menu can be open by click ALT button
  });

  // win.loadURL(
  //   isDev
  //   ? 'http//localhost:3000'
  //   : `file://${path.join(__dirname, '../build/index.html')}`
  // );
  win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});