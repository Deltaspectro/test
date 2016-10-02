//librerias para iniciar una ventana remota.
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
//llamamos a los metodos del index.

const newWindowBtn = document.getElementById('new-window')

newWindowBtn.addEventListener('click', function (event) {
  const modalPath = path.join(`file://${__dirname}/vistas/ventana1.html`)
  let win = new BrowserWindow({ width: 400, height: 320 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})
const ipc = require('electron').ipcRenderer

const selectDirBtn = document.getElementById('select-directory')

selectDirBtn.addEventListener('click', function (event) {
  ipc.send('open-file-dialog')
})

ipc.on('selected-directory', function (event, path) {
  document.getElementById('selected-file').innerHTML = `You selected: ${path}`
})