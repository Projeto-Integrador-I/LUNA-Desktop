const { app, BrowserWindow } = require("electron");

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "./src/assets/favicon.ico",

    // The lines below solved the issue
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
    }
  });

  win.loadFile("./src/pages/auth/Login/index.html");
}

app.on("ready", createWindow);
