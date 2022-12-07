"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

//import './database';
_app["default"].listen(3333);

console.log('servidor en puerto 3333');