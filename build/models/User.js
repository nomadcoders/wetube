"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _passportLocalMongoose = _interopRequireDefault(require("passport-local-mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose.default.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
  comments: [{
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Comment"
  }],
  videos: [{
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "Video"
  }]
});
UserSchema.plugin(_passportLocalMongoose.default, {
  usernameField: "email"
});

var model = _mongoose.default.model("User", UserSchema);

var _default = model;
exports.default = _default;