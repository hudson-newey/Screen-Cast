const path = require('path');
const request = require("request");
const express = require('express');
const expressApp = express();
const port = 8080;

const { BrowserWindow, app } = require('electron');

let mainWindow = null;

function main() {
  var mainWindow = new BrowserWindow({
  	center: true,
    fullscreen: true,
    alwaysOnTop: true,
    title: 'Screen Cast',
  });
  mainWindow.loadURL(`http://localhost:8080/`);
  mainWindow.on('close', event => {
    mainWindow = null;
  })

  expressApp.get('/', function(req, res) {
	if (req.query.q != null && req.query.q != "") {
		// load to a website
		mainWindow.loadURL(req.query.q);
	} else {
		// load homepage
		res.sendFile(path.join(__dirname + '/index.html'));
	}
  });
}

app.on('ready', main);
expressApp.listen(port, () => console.log(`Screen Cast listening at http://localhost:${port}`))