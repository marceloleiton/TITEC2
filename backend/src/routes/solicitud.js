import { Router } from "express";
//express sirve para crear rutas
import {
    getSolicitudes,
    getEventos,
    getSolicitud,
    getSolicitudCount,
    getEventosCount,
    crearSolicitud,
    eliminarSolicitud,
    eliminarEvento,
    modificarSolicitud,
    modificarEvento,
    getEvento,
    crearEvento
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
router.get('/respuesta/solicitudes', getSolicitudes)

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
 * /respuesta/solicitudes/count:
 *  get:
 *      summary: Obtiene un conteo de todas las solicitudes
 *      tags: [Solicitud]
 */
router.get('/respuesta/solicitudes/count', getSolicitudCount)

/**
 * @swagger
 * /respuesta/eventos/count:
 *  get:
 *      summary: Obtiene un conteo de todos los eventos
 *      tags: [Evento]
 */
router.get('/respuesta/eventos/count', getEventosCount)

/**
 * @swagger
 * /respuesta/solicitud/{id}:
 *  get:
 *      summary: Obtiene una solicitud en específico
 *      tags: [Solicitud]
 */
router.get('/respuesta/solicitud/:id', getSolicitud)

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
 * /respuesta/evento:
 *  post:
 *      summary: Crea un evento
 *      tags: [Evento]
 */
router.post('/respuesta/evento', crearEvento)


/**
 * @swagger
 * /respuesta/solicitud/{id}:
 *  delete:
 *      summary: Elimina una solicitud en específico
 *      tags: [Solicitud]
 */
router.delete('/respuesta/solicitud/:id', eliminarSolicitud)

/**
 * @swagger
 * /respuesta/evento/{id}:
 *  delete:
 *      summary: Modifica un evento en específico
 *      tags: [Evento]
 */

router.delete('/respuesta/evento/:id', eliminarEvento)

/**
 * @swagger
 * /respuesta/solicitud/{id}:
 *  put:
 *      summary: Modifica una solicitud en específico
 *      tags: [Solicitud]
 * 
 */
router.put('/respuesta/solicitud/:id', modificarSolicitud)

/**
 * @swagger
 * /respuesta/evento/{id}:
 *  put:
 *      summary: Modifica un evento en específico
 *      tags: [Evento]
 * 
 */
router.put('/respuesta/evento/:id', modificarEvento)

export default router