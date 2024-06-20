import path from 'path'
import { app, ipcMain, dialog } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import { spawn } from 'child_process'
import childProcess from 'child_process'
const isProd = process.env.NODE_ENV === 'production'

let child;

const runLiveDownloader = (mainWindow, ...args)=>{
  // Spawn the child process
   child = childProcess.spawn('node', ['C:\\Users\\Giovane\\Desktop\\Workspace\\TwitchRecorder\\recorderApp\\index.js', 'alanzoka', '1']);

   child.on('error', (error) => {
    dialog.showMessageBox({
        title: 'Title',
        type: 'warning',
        message: 'Error occured.\r\n' + error
    });
});

child.stdout.setEncoding('utf8');
child.stdout.on('data', (data) => {
    //Here is the output
    data=data.toString();   
    console.log(data);      
});

child.stderr.setEncoding('utf8');
child.stderr.on('data', (data) => {
    // Return some data to the renderer process with the mainprocess-response ID
    mainWindow.webContents.send('mainprocess-response', data);
    //Here is the output from the command
    console.log(data);  
});

child.on('close', (code) => {
    //Here you can get the exit code of the script  
    switch (code) {
        case 0:
            dialog.showMessageBox({
                title: 'Title',
                type: 'info',
                message: 'End process.\r\n'
            });
            break;
    }

});
   //   child = childProcess.fork('C:\\Users\\Giovane\\Desktop\\Workspace\\TwitchRecorder\\recorderApp\\index.js');
  //    // Handle stdout
  // child.stdout.on('data', (data) => {
  //   console.log(`stdout: ${data}`);
  //   // Send stdout data to renderer process if needed
  //   mainWindow.webContents.send('script-output', data.toString());
  // });

  // // Handle stderr
  // child.stderr.on('data', (data) => {
  //   console.error(`stderr: ${data}`);
  //   // Send stderr data to renderer process if needed
  //   mainWindow.webContents.send('script-error', data.toString());
  // });

  // // Handle process exit
  // child.on('close', (code) => {
  //   console.log(`child process exited with code ${code}`);
  //   // Send exit code back to renderer process if needed
  //   mainWindow.webContents.send('script-exit', code);
  // });
}

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
  await app.whenReady()

  const mainWindow = createWindow('main', {
    width: 2560,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (isProd) {
    await mainWindow.loadURL('app://./home')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}`)
    mainWindow.removeMenu();
    mainWindow.maximize();
    mainWindow.webContents.openDevTools()
  }

  runLiveDownloader(mainWindow, 'asd')
})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})

function getAppDataPath() {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const appName = app.name; // Replace with your actual application name

  if (isDevelopment) {
      return path.join(app.getPath('appData'), appName);
  } else {
      return app.getPath('appData');
  }
}
app.setPath('userData', getAppDataPath());