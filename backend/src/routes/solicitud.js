import { Router } from "express";
//express sirve para crear rutas
import {
    getEventos,
    crearSolicitud,
    getEvento,
    crearInscripcion,
    getCategoria,
} from "../controllers/solicitud"

const router = Router();

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
router.get('/respuesta/eventos', getEventos)

/**
 * @swagger
 * /respuesta/evento/{id}:
 *  get:
 *      summary: Obtiene un evento en específico
 *      tags: [Evento]
 */
router.get('/respuesta/evento/:id', getEvento)

/**
 * @swagger
 * /respuesta/solicitud:
 *  post:
 *      summary: Crea una solicitud
 *      tags: [Solicitud]
 */
router.post('/respuesta/solicitud', crearSolicitud)

/**
 * @swagger
 * /respuesta/inscripcion:
 *  post:
 *      summary: Crea una inscripcion
 *      tags: [Inscripcion]
 */
router.post('/respuesta/inscripcion', crearInscripcion)

/**
 * @swagger
 * /respuesta/categoria:
 * get:
 *     summary: Obtiene todas las categorias
 *    tags: [Evento]
 */
router.get('/respuesta/categoria', getCategoria)


export default router

