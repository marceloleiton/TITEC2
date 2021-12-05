import { Router } from "express";
//express sirve para crear rutas
import {getSolicitudes,
    getSolicitud,
    getSolicitudCount,
    crearSolicitud,
    eliminarSolicitud,
    modificarSolicitud} from "../controllers/solicitud"

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
router.get('/solicitud',getSolicitudes)

/**
 * @swagger
 * /solicitud/count:
 *  get:
 *      summary: Obtiene un conteo de todas las solicitudes
 *      tags: [Solicitud]
 */
router.get('/solicitud/count',getSolicitudCount)

/**
 * @swagger
 * /solicitud:
 *  get:
 *      summary: Obtiene una solicitud en específico
 *      tags: [Solicitud]
 */
router.get('/solicitud/:id',getSolicitud)

/**
 * @swagger
 * /solicitud:
 *  post:
 *      summary: Crea una solicitud
 *      tags: [Solicitud]
 */
router.post('/solicitud',crearSolicitud)

/**
 * @swagger
 * /solicitud:
 *  delete:
 *      summary: Elimina una solicitud en específico
 *      tags: [Solicitud]
 */
router.delete('/solicitud/:id',eliminarSolicitud)

/**
 * @swagger
 * /solicitud:
 *  put:
 *      summary: Modifica una solicitud en específico
 *      tags: [Solicitud]
 */
router.put('/solicitud/:id',modificarSolicitud)

export default router