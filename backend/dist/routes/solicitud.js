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
 *  name: Evento
 *  description: Evento Endpoint
 */

/**
 * @swagger
 * /respuesta/solicitudes:
 *  get:
 *      summary: Obtiene todas las solicitudes
 *      tags: [Solicitud]
 */

router.get('/respuesta/solicitudes', _solicitud.getSolicitudes);
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
 * /respuesta/solicitudes/count:
 *  get:
 *      summary: Obtiene un conteo de todas las solicitudes
 *      tags: [Solicitud]
 */

router.get('/respuesta/solicitudes/count', _solicitud.getSolicitudCount);
/**
 * @swagger
 * /respuesta/eventos/count:
 *  get:
 *      summary: Obtiene un conteo de todos los eventos
 *      tags: [Evento]
 */

router.get('/respuesta/eventos/count', _solicitud.getEventosCount);
/**
 * @swagger
 * /respuesta/solicitud/{id}:
 *  get:
 *      summary: Obtiene una solicitud en específico
 *      tags: [Solicitud]
 */

router.get('/respuesta/solicitud/:id', _solicitud.getSolicitud);
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
 * /respuesta/evento:
 *  post:
 *      summary: Crea un evento
 *      tags: [Evento]
 */

router.post('/respuesta/evento', _solicitud.crearEvento);
/**
 * @swagger
 * /respuesta/solicitud/{id}:
 *  delete:
 *      summary: Elimina una solicitud en específico
 *      tags: [Solicitud]
 */

router["delete"]('/respuesta/solicitud/:id', _solicitud.eliminarSolicitud);
/**
 * @swagger
 * /respuesta/evento/{id}:
 *  delete:
 *      summary: Modifica un evento en específico
 *      tags: [Evento]
 */

router["delete"]('/respuesta/evento/:id', _solicitud.eliminarEvento);
/**
 * @swagger
 * /respuesta/solicitud/{id}:
 *  put:
 *      summary: Modifica una solicitud en específico
 *      tags: [Solicitud]
 * 
 */

router.put('/respuesta/solicitud/:id', _solicitud.modificarSolicitud);
/**
 * @swagger
 * /respuesta/evento/{id}:
 *  put:
 *      summary: Modifica un evento en específico
 *      tags: [Evento]
 * 
 */

router.put('/respuesta/evento/:id', _solicitud.modificarEvento);
var _default = router;
exports["default"] = _default;