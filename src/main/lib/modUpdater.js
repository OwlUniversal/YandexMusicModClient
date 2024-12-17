const fetch = require("node-fetch");
const exec = require("child_process").exec;
const promisify = require("util").promisify;
const fsPromise = require("fs").promises;
const path = require("path");
const semver = require("semver");
const Logger_js_1 = require("../packages/logger/Logger.js");
const config_js_1 = require("../config.js");

const execPromise = promisify(exec);


// const UPDATE_CHECK_URL = `https://api.github.com/repos/OwlUniversal/YandexMusicModClient/releases/latest`;
// const APP_ASAR_PATH = path.join(
  //process.env.LOCALAPPDATA,
  // "\\Programs\\YandexMusic\\resources\\app.asar",
  // "/usr/lib/yandex-music/yandex-music.asar" // default path to it, i suppose. but because it requires admin, uhhhhh...
// );
const currentVersion = config_js_1.config.modification.version;
// console.log(APP_ASAR_PATH);

class ModUpdater {
  updaterId = null;
  onModUpdateListeners = [];
  logger;
  constructor() {
    this.latestVersion = currentVersion;
    this.logger = new Logger_js_1.Logger("ModUpdaterLogger");
    this.logger.log("Initializing");
  }

  start() {
    // this.checkAndInstall();
    // this.updaterId = setInterval(() => {
      // this.checkAndInstall();
    // }, config_js_1.config.common.UPDATE_POLL_INTERVAL_MS);
    
    this.logger.log("[FIXME] Loop started");
  }
  stop() {
    // if (this.updaterId) {
    //   clearInterval(this.updaterId);
    //   this.logger.log("Loop stopped");
    // }
    
    this.logger.log("[FIXME] Loop stopped");
  }

  async checkAndInstall() {
    // const url = await this.checkForUpdates();
    // if (!url) return;

    // await this.downloadFile(url, APP_ASAR_PATH);
    //await this.deleteFile(APP_ASAR_PATH)
    //await this.renameFile(APP_ASAR_UPDATE_PATH, APP_ASAR_PATH);
    /*setTimeout(() => {                                      //That's disgusting fix. I know...//i suppose bro, i suppose
      this.onModUpdateListeners.forEach((listener) => {
        listener(currentVersion, this.latestVersion);
      });
    }, 5000);*/
  }

  async checkForUpdates() {
    /*const response = await fetch(UPDATE_CHECK_URL);
    const releaseData = await response.json();
    if (semver.lt(this.latestVersion, releaseData.name)) {
        this.latestVersion = releaseData.name;
        this.logger.log(
        "New version available:",
        currentVersion,
        "->",
        this.latestVersion,
      );
      return releaseData.assets[0].browser_download_url;
    }
    return false;*/
  }

  async downloadFile(url, path) {
    //const res = await fetch(url);
    //const buffer = await res.buffer();
    //await fsPromise.writeFile(path, buffer);
    //await execPromise(`curl -L -s ${url} > ${path}`)
    this.logger.log("[FIXME] downloadFile was disabled.");
  }

  async deleteFile(path) {
    // await fsPromise.unlink(path);
    this.logger.log("[FIXME] Deleted: ", path);
  }

  async renameFile(oldPath, newPath) {
    // await fsPromise.rename(oldPath, newPath);
    this.logger.log("[FIXME] Renamed: ", oldPath, " to ", newPath);
  }

  onUpdate(listener) {
    this.onModUpdateListeners.push(listener);
  }
}

module.exports = ModUpdater;
