"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventos = exports.getEvento = exports.getCategoria = exports.crearSolicitud = exports.crearInscripcion = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// obtener todos los eventos
var getEventos = /*#__PURE__*/function () {
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
            return conexion.query('SELECT categoria_evento.categoria, evento.* FROM evento LEFT JOIN categoria_evento ON categoria_evento.id_evento = evento.id WHERE evento.id = categoria_evento.id_evento and evento.estado = "Activo"');

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

  return function getEventos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //SELECT * FROM evento WHERE estado="Activo"
//obtener categoria de los eventos donde el id es igual a evento 


exports.getEventos = getEventos;

var getCategoria = /*#__PURE__*/function () {
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
            return conexion.query('SELECT * from categoria_evento where id_evento in (select id from evento where estado="Activo");');

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

  return function getCategoria(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //obtener el evento seleccionado


exports.getCategoria = getCategoria;

var getEvento = /*#__PURE__*/function () {
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
            return conexion.query('SELECT e.*, c.* FROM evento AS e LEFT JOIN categoria_evento AS c ON c.id_evento = e.id WHERE e.id = ?', [req.params.id]);

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

  return function getEvento(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //hacer la inscripción al evento seleccionado(llenado del formulario)


exports.getEvento = getEvento;

var crearSolicitud = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var conexion, _yield$conexion$query7, _yield$conexion$query8, resultado;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _database.connect)();

          case 2:
            conexion = _context4.sent;
            _context4.next = 5;
            return conexion.query('INSERT INTO persona(rut,nombres,apellidos,telefono_personal,telefono_contacto,correo,fecha_nacimiento,direccion,sexo,talla) VALUES(?,?,?,?,?,?,?,?,?,?)', [req.body.rut, req.body.nombres, req.body.apellidos, req.body.telefono_personal, req.body.telefono_contacto, req.body.correo, req.body.fecha_nacimiento, req.body.direccion, req.body.sexo, req.body.talla]);

          case 5:
            _yield$conexion$query7 = _context4.sent;
            _yield$conexion$query8 = (0, _slicedToArray2["default"])(_yield$conexion$query7, 1);
            resultado = _yield$conexion$query8[0];
            res.json(_objectSpread({
              id: resultado.insertId
            }, req.body));

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function crearSolicitud(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //establecer la inscripción


exports.crearSolicitud = crearSolicitud;

var crearInscripcion = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var conexion, _yield$conexion$query9, _yield$conexion$query10, resultado;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.connect)();

          case 2:
            conexion = _context5.sent;
            _context5.next = 5;
            return conexion.query('INSERT INTO inscribe_evento (rut, id_evento, fecha, categoria) VALUES (?,?,?,?)', [req.body.rut, req.body.id_evento, req.body.fecha, req.body.categoria]);

          case 5:
            _yield$conexion$query9 = _context5.sent;
            _yield$conexion$query10 = (0, _slicedToArray2["default"])(_yield$conexion$query9, 1);
            resultado = _yield$conexion$query10[0];
            res.json(_objectSpread({
              id: resultado.insertId
            }, req.body));

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function crearInscripcion(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.crearInscripcion = crearInscripcion;