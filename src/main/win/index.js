const { BrowserWindow } = require('electron')
const { resolve } = require('path')

const absPath = path => resolve(__dirname, path)
const createDemoA = () => {
  const demoA = new BrowserWindow({
    height: 200,
    width: 300,
    webPreferences: {
      preload: absPath('../../preload.js'),
      webSecurity: false
    }
  })

  demoA.loadFile(absPath('../../render/demoA/index.html'))
  demoA.setTitle('demoA')
}

const createDemoB = () => {
  const demoB = new BrowserWindow({
    height: 200,
    width: 300,
    webPreferences: {
      preload: absPath('../../preload.js'),
      webSecurity: false
    }
  })

  demoB.loadFile(absPath('../../render/demoB/index.html'))
  demoB.setTitle('demoB')
}

const initWindow = async () => {
  createDemoA()
  createDemoB()
}

module.exports = {
  initWindow
}
