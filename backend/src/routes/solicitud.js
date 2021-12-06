import { Router } from "express";
//express sirve para crear rutas
import {getSolicitudes,
    getEventos,
    getSolicitud,
    getSolicitudCount,
    getEventosCount,
    crearSolicitud,
    eliminarSolicitud,
    modificarSolicitud,
    getEvento,
    crearEvento} from "../controllers/solicitud"

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Solicitud
 *  description: Solicitud Endpoint
 */

/**
 * @swagger
 * /solicitud:
 *  get:
 *      summary: Obtiene todas las solicitudes
 *      tags: [Solicitud]
 */
router.get('/respuesta/solicitudes',getSolicitudes)
/**
 * @swagger
 * /respuesta/eventos:
 *  get:
 *      summary: Obtiene todos los eventos
 *      tags: [Eventos]
 */
 router.get('/respuesta/eventos',getEventos)


/**
 * @swagger
 * /solicitud/count:
 *  get:
 *      summary: Obtiene un conteo de todas las solicitudes
 *      tags: [Solicitud]
 */
router.get('/respuesta/solicitudes/count',getSolicitudCount)
/**
 * @swagger
 * /solicitud/count:
 *  get:
 *      summary: Obtiene un conteo de todas las solicitudes
 *      tags: [Solicitud]
 */
 router.get('/respuesta/eventos/count',getEventosCount)

/**
 * @swagger
 * /solicitud:
 *  get:
 *      summary: Obtiene una solicitud en específico
 *      tags: [Solicitud]
 */
router.get('/respuesta/solicitudes/:id',getSolicitud)
/**
 * @swagger
 * /solicitud:
 *  get:
 *      summary: Obtiene una solicitud en específico
 *      tags: [Solicitud]
 */
 router.get('/respuesta/eventos/:id',getEvento)

/**
 * @swagger
 * /solicitud:
 *  post:
 *      summary: Crea una solicitud
 *      tags: [Solicitud]
 */
router.post('/respuesta/solicitud',crearSolicitud)
/**
 * @swagger
 * /solicitud:
 *  post:
 *      summary: Crea una solicitud
 *      tags: [Solicitud]
 */
 router.post('/respuesta/evento',crearEvento)


/**
 * @swagger
 * /solicitud:
 *  delete:
 *      summary: Elimina una solicitud en específico
 *      tags: [Solicitud]
 */
router.delete('/respuesta/solicitud/:id',eliminarSolicitud)

/**
 * @swagger
 * /solicitud:
 *  put:
 *      summary: Modifica una solicitud en específico
 *      tags: [Solicitud]
 */
router.put('/respuesta/solicitud/:id',modificarSolicitud)

export default router