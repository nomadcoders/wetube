"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _videoController = require("../controllers/videoController");

var _middlewares = require("../middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var videoRouter = _express.default.Router(); // Upload


videoRouter.get(_routes.default.upload, _middlewares.onlyPrivate, _videoController.getUpload);
videoRouter.post(_routes.default.upload, _middlewares.onlyPrivate, _middlewares.uploadVideo, _videoController.postUpload); // Video Detail

videoRouter.get(_routes.default.videoDetail(), _videoController.videoDetail); // Edit Video

videoRouter.get(_routes.default.editVideo(), _middlewares.onlyPrivate, _videoController.getEditVideo);
videoRouter.post(_routes.default.editVideo(), _middlewares.onlyPrivate, _videoController.postEditVideo); // Delete Video

videoRouter.get(_routes.default.deleteVideo(), _middlewares.onlyPrivate, _videoController.deleteVideo);
var _default = videoRouter;
exports.default = _default;