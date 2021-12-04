import {connect} from '../database';

export const getSolicitudes = async (req, res) =>{
    const conexion = await connect();
    const[filas]= await conexion.query('SELECT * FROM solicitud_deportiva');
    res.json(filas);
}
export const getSolicitud = async (req, res) =>{
    //podríamos hacer la excepción en caso de no existir ese id
    const conexion = await connect();
    const[filas]= await conexion.query('SELECT * FROM solicitud_deportiva WHERE id_solicitud = ?',[req.params.id,]);
    res.json(filas[0]);
}
export const getSolicitudCount =  async (req, res) =>{
    const conexion = await connect();
    const[filas]= await conexion.query("SELECT COUNT(*) FROM solicitud_deportiva");
    //console.log(filas)
    res.json(filas[0]["COUNT(*)"]);
}
export const crearSolicitud = async (req,res) =>{
    const conexion = await connect();
    const [resultado]= await conexion.query('INSERT INTO solicitud_deportiva(id_solicitud,rut_postulante,codigo_actividad,fecha_inscripcion,datos_extra,obs_medica) VALUES(?,?,?,?,?,?)',
     [req.body.id_solicitud, req.body.rut_postulante, req.body.codigo_actividad, req.body.fecha_inscripcion, req.body.datos_extra, req.body.obs_medica]);
     res.json({
         id: resultado.insertId,
         ...req.body,
     });
}

export const eliminarSolicitud = async(req,res) =>{
    const conexion = await connect();
    await conexion.query('DELETE FROM solicitud_deportiva WHERE id_solicitud = ?',[req.params.id,]);
    res.sendStatus(204);
}

export const modificarSolicitud = async (req,res) =>{
    const conexion = await connect();
    const resultado= await conexion.query('UPDATE solicitud_deportiva SET ? WHERE id_solicitud = ?',[
        req.body,
        req.params.id
    ]);
    console.log(resultado);
    res.sendStatus(204);
}