'use strict'

var electron = require('electron')

electron.contextBridge.exposeInMainWorld('$ipc', {
  send: (...args) => electron.ipcRenderer.send(...args),
  sendSync: (...args) => electron.ipcRenderer.sendSync(...args),
  invoke: (...args) => electron.ipcRenderer.invoke(...args),
  on: (...args) => electron.ipcRenderer.on(...args),
  once: (...args) => electron.ipcRenderer.once(...args),
  removeAllListeners: channel =>
    electron.ipcRenderer.removeAllListeners(channel)
})
