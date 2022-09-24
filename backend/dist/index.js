"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

//import './database';
_app["default"].listen(3000);

console.log('servidor en puerto 3000');