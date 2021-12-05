"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import './database';
_app["default"].listen(3000);

console.log('servidor en puerto 3000');