const { app, BrowserWindow } = require("electron");

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "./src/assets/favicon.ico",
  });

  win.loadFile("./src/pages/Login/index.html");
}

app.on("ready", createWindow);
