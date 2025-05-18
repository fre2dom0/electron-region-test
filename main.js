const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile(path.join(__dirname, 'src/index.html'));
    win.setIgnoreMouseEvents(true, { forward: true });

    ipcMain.on('enable-clicks', () => {
        console.log('[IPC] ENABLE CLICKS');
        win.setIgnoreMouseEvents(false);
    });

    ipcMain.on('disable-clicks', () => {
        console.log('[IPC] DISABLE CLICKS');
        win.setIgnoreMouseEvents(true, { forward: false });
    });

    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
