import { Router } from "express";
//express sirve para crear rutas
import {getSolicitudes,getSolicitud,getSolicitudCount,crearSolicitud,eliminarSolicitud,modificarSolicitud} from "../controllers/solicitud"

const router = Router();

router.get('/solicitud',getSolicitudes)

router.get('/solicitud/count',getSolicitudCount)

router.get('/solicitud/:id',getSolicitud)

router.post('/solicitud',crearSolicitud)
 
router.delete('/solicitud/:id',eliminarSolicitud)

router.put('/solicitud/:id',modificarSolicitud)

export default router