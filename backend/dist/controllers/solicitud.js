"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modificarSolicitud = exports.modificarEvento = exports.getSolicitudes = exports.getSolicitudCount = exports.getSolicitud = exports.getEventosCount = exports.getEventos = exports.getEvento = exports.eliminarSolicitud = exports.eliminarEvento = exports.crearSolicitud = exports.crearEvento = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getSolicitudes = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var conexion, _yield$conexion$query, _yield$conexion$query2, filas;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            conexion = _context.sent;
            _context.next = 5;
            return conexion.query('SELECT * FROM solicitud_deportiva');

          case 5:
            _yield$conexion$query = _context.sent;
            _yield$conexion$query2 = (0, _slicedToArray2["default"])(_yield$conexion$query, 1);
            filas = _yield$conexion$query2[0];
            res.json(filas);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSolicitudes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getSolicitudes = getSolicitudes;

var getEventos = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var conexion, _yield$conexion$query3, _yield$conexion$query4, filas;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _database.connect)();

          case 2:
            conexion = _context2.sent;
            _context2.next = 5;
            return conexion.query('SELECT * FROM actividades WHERE tipo="Evento" ');

          case 5:
            _yield$conexion$query3 = _context2.sent;
            _yield$conexion$query4 = (0, _slicedToArray2["default"])(_yield$conexion$query3, 1);
            filas = _yield$conexion$query4[0];
            res.json(filas);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getEventos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getEventos = getEventos;

var getSolicitud = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var conexion, _yield$conexion$query5, _yield$conexion$query6, filas;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connect)();

          case 2:
            conexion = _context3.sent;
            _context3.next = 5;
            return conexion.query('SELECT * FROM solicitud_deportiva WHERE rut_postulante = ?', [req.params.id]);

          case 5:
            _yield$conexion$query5 = _context3.sent;
            _yield$conexion$query6 = (0, _slicedToArray2["default"])(_yield$conexion$query5, 1);
            filas = _yield$conexion$query6[0];
            res.json(filas[0]);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getSolicitud(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getSolicitud = getSolicitud;

var getEvento = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var conexion, _yield$conexion$query7, _yield$conexion$query8, filas;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _database.connect)();

          case 2:
            conexion = _context4.sent;
            _context4.next = 5;
            return conexion.query('SELECT * FROM actividades WHERE tipo="Evento" AND codigo_actividad = ?', [req.params.id]);

          case 5:
            _yield$conexion$query7 = _context4.sent;
            _yield$conexion$query8 = (0, _slicedToArray2["default"])(_yield$conexion$query7, 1);
            filas = _yield$conexion$query8[0];
            res.json(filas[0]);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getEvento(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getEvento = getEvento;

var getSolicitudCount = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var conexion, _yield$conexion$query9, _yield$conexion$query10, filas;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.connect)();

          case 2:
            conexion = _context5.sent;
            _context5.next = 5;
            return conexion.query("SELECT COUNT(*) FROM solicitud_deportiva");

          case 5:
            _yield$conexion$query9 = _context5.sent;
            _yield$conexion$query10 = (0, _slicedToArray2["default"])(_yield$conexion$query9, 1);
            filas = _yield$conexion$query10[0];
            res.json(filas[0]["COUNT(*)"]);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getSolicitudCount(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getSolicitudCount = getSolicitudCount;

var getEventosCount = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var conexion, _yield$conexion$query11, _yield$conexion$query12, filas;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _database.connect)();

          case 2:
            conexion = _context6.sent;
            _context6.next = 5;
            return conexion.query('SELECT COUNT(*) FROM actividades WHERE tipo="Evento" ');

          case 5:
            _yield$conexion$query11 = _context6.sent;
            _yield$conexion$query12 = (0, _slicedToArray2["default"])(_yield$conexion$query11, 1);
            filas = _yield$conexion$query12[0];
            res.json(filas[0]["COUNT(*)"]);

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getEventosCount(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getEventosCount = getEventosCount;

var crearSolicitud = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var conexion, _yield$conexion$query13, _yield$conexion$query14, resultado;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (0, _database.connect)();

          case 2:
            conexion = _context7.sent;
            _context7.next = 5;
            return conexion.query('INSERT INTO solicitud_deportiva(id_solicitud,rut_postulante,codigo_actividad,fecha_inscripcion,datos_extra,obs_medica) VALUES(?,?,?,?,?,?)', [req.body.id_solicitud, req.body.rut_postulante, req.body.codigo_actividad, req.body.fecha_inscripcion, req.body.datos_extra, req.body.obs_medica]);

          case 5:
            _yield$conexion$query13 = _context7.sent;
            _yield$conexion$query14 = (0, _slicedToArray2["default"])(_yield$conexion$query13, 1);
            resultado = _yield$conexion$query14[0];
            res.json(_objectSpread({
              id: resultado.insertId
            }, req.body));

          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function crearSolicitud(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.crearSolicitud = crearSolicitud;

var crearEvento = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var conexion, _yield$conexion$query15, _yield$conexion$query16, resultado;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return (0, _database.connect)();

          case 2:
            conexion = _context8.sent;
            _context8.next = 5;
            return conexion.query('INSERT INTO actividades(codigo_actividad,rut_responsable,tipo,cupos,direccion,nombre_actividad,estado_actividad,descripción,fecha_inicio,fecha_termino,modalidad,requisitos,area) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)', [req.body.codigo_actividad, req.body.rut_responsable, req.body.tipo, req.body.cupos, req.body.direccion, req.body.nombre_actividad, req.body.estado_actividad, req.body.descripción, req.body.fecha_inicio, req.body.fecha_termino, req.body.modalidad, req.body.requisitos, req.body.area]);

          case 5:
            _yield$conexion$query15 = _context8.sent;
            _yield$conexion$query16 = (0, _slicedToArray2["default"])(_yield$conexion$query15, 1);
            resultado = _yield$conexion$query16[0];
            res.json(_objectSpread({
              id: resultado.insertId
            }, req.body));

          case 9:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function crearEvento(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.crearEvento = crearEvento;

var eliminarSolicitud = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var conexion;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return (0, _database.connect)();

          case 2:
            conexion = _context9.sent;
            _context9.next = 5;
            return conexion.query('DELETE FROM solicitud_deportiva WHERE tipo="Evento" AND id_solicitud = ?', [req.params.id]);

          case 5:
            res.sendStatus(204);

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function eliminarSolicitud(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.eliminarSolicitud = eliminarSolicitud;

var eliminarEvento = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var conexion;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return (0, _database.connect)();

          case 2:
            conexion = _context10.sent;
            _context10.next = 5;
            return conexion.query('DELETE FROM actividades WHERE codigo_actividad = ?', [req.params.id]);

          case 5:
            res.sendStatus(204);

          case 6:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function eliminarEvento(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.eliminarEvento = eliminarEvento;

var modificarSolicitud = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var conexion;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return (0, _database.connect)();

          case 2:
            conexion = _context11.sent;
            _context11.next = 5;
            return conexion.query('UPDATE solicitud_deportiva SET ? WHERE id_solicitud = ?', [req.body, req.params.id]);

          case 5:
            res.sendStatus(204);

          case 6:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function modificarSolicitud(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

exports.modificarSolicitud = modificarSolicitud;

var modificarEvento = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var conexion;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return (0, _database.connect)();

          case 2:
            conexion = _context12.sent;
            _context12.next = 5;
            return conexion.query('UPDATE actividades SET ? WHERE codigo_actividad = ?', [req.body, req.params.id]);

          case 5:
            res.sendStatus(204);

          case 6:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function modificarEvento(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

exports.modificarEvento = modificarEvento;