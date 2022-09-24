"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerOptions = require("./swaggerOptions");

var _solicitud = _interopRequireDefault(require("./routes/solicitud"));

var specs = (0, _swaggerJsdoc["default"])(_swaggerOptions.options);
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cors["default"])()); //conectar aplicaciones de backend o servidor puede responder

app.use((0, _morgan["default"])('dev'));
app.use(_solicitud["default"]);
app.use('/docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
var _default = app;
exports["default"] = _default;