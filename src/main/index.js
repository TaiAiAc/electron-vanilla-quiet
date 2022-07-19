const { app } = require('electron')
const { initWindow } = require('./win')
app.whenReady().then(() => {
  initWindow()
})
