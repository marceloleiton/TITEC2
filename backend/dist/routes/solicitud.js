"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _solicitud = require("../controllers/solicitud");

//express sirve para crear rutas
var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Solicitud
 *  description: Solicitud Endpoint
 */

/**
 * @swagger
 * tags:
 *  name: Inscripcion
 *  description: Inscripcion Endpoint
 */

/**
 * @swagger
 * tags:
 *  name: Evento
 *  description: Evento Endpoint
 */

/**
 * @swagger
 * /respuesta/eventos:
 *  get:
 *      summary: Obtiene todos los eventos
 *      tags: [Evento]
 */

router.get('/respuesta/eventos', _solicitud.getEventos);
/**
 * @swagger
 * /respuesta/evento/{id}:
 *  get:
 *      summary: Obtiene un evento en específico
 *      tags: [Evento]
 */

router.get('/respuesta/evento/:id', _solicitud.getEvento);
/**
 * @swagger
 * /respuesta/solicitud:
 *  post:
 *      summary: Crea una solicitud
 *      tags: [Solicitud]
 */

router.post('/respuesta/solicitud', _solicitud.crearSolicitud);
/**
 * @swagger
 * /respuesta/inscripcion:
 *  post:
 *      summary: Crea una inscripcion
 *      tags: [Inscripcion]
 */

router.post('/respuesta/inscripcion', _solicitud.crearInscripcion);
/**
 * @swagger
 * /respuesta/categoria:
 * get:
 *     summary: Obtiene todas las categorias
 *    tags: [Evento]
 */

router.get('/respuesta/categoria', _solicitud.getCategoria);
var _default = router;
exports["default"] = _default;