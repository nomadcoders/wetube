"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(process.env);

_mongoose.default.connect(process.env.PRODUCTION ? process.env.MONGO_URL_PROD : process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});

var db = _mongoose.default.connection;

var handleOpen = function handleOpen() {
  return console.log("✅  Connected to DB");
};

var handleError = function handleError(error) {
  return console.log("\u274C Error on DB Connection:".concat(error));
};

db.once("open", handleOpen);
db.on("error", handleError);