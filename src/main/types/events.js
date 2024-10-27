"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
var Events;
(function (Events) {
    Events["WINDOW_MINIMIZE"] = "WINDOW_MINIMIZE";
    Events["WINDOW_MAXIMIZE"] = "WINDOW_MAXIMIZE";
    Events["WINDOW_CLOSE"] = "WINDOW_CLOSE";
    Events["INSTALL_UPDATE"] = "INSTALL_UPDATE";
    Events["UPDATE_AVAILABLE"] = "UPDATE_AVAILABLE";
  Events["MOD_UPDATE_AVAILABLE"] = "MOD_UPDATE_AVAILABLE";
    Events["APPLICATION_READY"] = "APPLICATION_READY";
    Events["GET_PASSPORT_LOGIN"] = "GET_PASSPORT_LOGIN";
  Events["RELEASE_NOTES_READY"] = "RELEASE_NOTES_READY";
  Events["SHOW_RELEASE_NOTES"] = "SHOW_RELEASE_NOTES";
    Events["REFRESH_APPLICATION_DATA"] = "REFRESH_APPLICATION_DATA";
    Events["PLAYER_STATE"] = "PLAYER_STATE";
    Events["PLAYER_ACTION"] = "PLAYER_ACTION";
    Events["OPEN_DEEPLINK"] = "OPEN_DEEPLINK";
    Events["FIRST_LAUNCH"] = "FIRST_LAUNCH";
    Events["APPLICATION_THEME"] = "APPLICATION_THEME";
  Events["APPLICATION_RESTART"] = "APPLICATION_RESTART";
    Events["PROBABILITY_BUCKET"] = "PROBABILITY_BUCKET";
    Events["LOAD_RELEASE_NOTES"] = "LOAD_RELEASE_NOTES";
    Events["DOWNLOAD_TRACK"] = "DOWNLOAD_TRACK";
})(Events || (exports.Events = Events = {}));