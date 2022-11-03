const path: any = require("path");
const request: any = require("request");
const express: any = require("express");
const expressApp: any = express();

const { BrowserWindow, app } = require("electron");

const SERVER_PORT: number = 8080;
let mainWindow = null;

function main() {
  var mainWindow = new BrowserWindow({
  	center: true,
    fullscreen: true,
    alwaysOnTop: true,
    title: "Screen Cast",
  });
  mainWindow.loadURL(`http://localhost:${SERVER_PORT}/`);
  mainWindow.on("close", () => {
    mainWindow = null;
  });

  expressApp.get("/", function(req: any, res: any) {
	if (req.query.q != null && req.query.q != "") {
		// load to a website
		mainWindow.loadURL(req.query.q);
	} else {
		// load homepage
		res.sendFile(path.join(`${__dirname}/index.html`));
	}
  });
}

app.on("ready", main);
expressApp.listen(SERVER_PORT, () => console.log(`Screen Cast listening at http://localhost:${SERVER_PORT}`))
