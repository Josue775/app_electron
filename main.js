const { app, BrowserWindow, shell } = require('electron')
let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    autoHideMenuBar: true // Oculta el menú
  })

  mainWindow.loadFile('index.html')
}
app.whenReady().then(() => {
  createWindow()
})
app.on("web-contents-created", (event, contents) => {
  contents.on("will-navigate", (event, navigationUrl) => {
    event.preventDefault();
    shell.openExternal(navigationUrl);
  });

  contents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });
});
