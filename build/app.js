"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _passport = _interopRequireDefault(require("passport"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _middlewares = require("./middlewares");

var _routes = _interopRequireDefault(require("./routes"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter"));

var _videoRouter = _interopRequireDefault(require("./routers/videoRouter"));

var _globalRouter = _interopRequireDefault(require("./routers/globalRouter"));

var _apiRouter = _interopRequireDefault(require("./routers/apiRouter"));

require("./passport");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var CokieStore = (0, _connectMongo.default)(_expressSession.default);
app.use((0, _helmet.default)());
app.set("view engine", "pug");
app.set("views", _path.default.join(__dirname, "views"));
app.use("/static", _express.default.static(_path.default.join(__dirname, "static")));
app.use((0, _cookieParser.default)());
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use((0, _morgan.default)("dev"));
app.use((0, _expressSession.default)({
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: false,
  store: new CokieStore({
    mongooseConnection: _mongoose.default.connection
  })
}));
app.use(_passport.default.initialize());
app.use(_passport.default.session());
app.use(_middlewares.localsMiddleware);
app.use(_routes.default.home, _globalRouter.default);
app.use(_routes.default.users, _userRouter.default);
app.use(_routes.default.videos, _videoRouter.default);
app.use(_routes.default.api, _apiRouter.default);
var _default = app;
exports.default = _default;