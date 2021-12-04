import { Router } from "express";
//express sirve para crear rutas
import {getSolicitudes,getSolicitud,getSolicitudCount,saveSolicitud,deleteSolicitud,updateSolicitud} from "../controllers/solicitud"

const router = Router();

router.get('/solicitud',getSolicitudes)

router.get('/solicitud/count',getSolicitudCount)

router.get('/solicitud/:id',getSolicitud)

router.post('/solicitud',saveSolicitud)
 
router.delete('/solicitud',deleteSolicitud)

router.put('/solicitud',updateSolicitud)

export default router