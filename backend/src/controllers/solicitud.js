import { connect } from '../database';


export const getSolicitudes = async (req, res) => {
    const conexion = await connect();
    const [filas] = await conexion.query('SELECT * FROM solicitud_deportiva');
    res.json(filas);
}
export const getEventos = async (req, res) => {
    const conexion = await connect();
    const [filas] = await conexion.query('SELECT * FROM actividades WHERE tipo="Evento" ');
    res.json(filas);
}


export const getSolicitud = async (req, res) => {
    //podríamos hacer la excepción en caso de no existir ese id
    const conexion = await connect();
    const [filas] = await conexion.query('SELECT * FROM solicitud_deportiva WHERE rut_postulante = ?', [req.params.id,]);
    res.json(filas[0]);
}
export const getEvento = async (req, res) => {
    //podríamos hacer la excepción en caso de no existir ese id
    const conexion = await connect();
    const [filas] = await conexion.query('SELECT * FROM actividades WHERE tipo="Evento" AND codigo_actividad = ?', [req.params.id,]);
    res.json(filas[0]);
}


export const getSolicitudCount = async (req, res) => {
    const conexion = await connect();
    const [filas] = await conexion.query("SELECT COUNT(*) FROM solicitud_deportiva");
    res.json(filas[0]["COUNT(*)"]);
}
export const getEventosCount = async (req, res) => {
    const conexion = await connect();
    const [filas] = await conexion.query('SELECT COUNT(*) FROM actividades WHERE tipo="Evento" ');
    res.json(filas[0]["COUNT(*)"]);
}


export const crearSolicitud = async (req, res) => {
    const conexion = await connect();
    const [resultado] = await conexion.query('INSERT INTO solicitud_deportiva(id_solicitud,rut_postulante,codigo_actividad,fecha_inscripcion,datos_extra,obs_medica) VALUES(?,?,?,?,?,?)',
        [req.body.id_solicitud, req.body.rut_postulante, req.body.codigo_actividad, req.body.fecha_inscripcion, req.body.datos_extra, req.body.obs_medica]);
    res.json({
        id: resultado.insertId,
        ...req.body,
    });
}
export const crearEvento = async (req, res) => {
    const conexion = await connect();
    const [resultado] = await conexion.query('INSERT INTO actividades(codigo_actividad,rut_responsable,tipo,cupos,direccion,nombre_actividad,estado_actividad,descripción,fecha_inicio,fecha_termino,modalidad,requisitos,area) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [req.body.codigo_actividad, req.body.rut_responsable, req.body.tipo, req.body.cupos, req.body.direccion, req.body.nombre_actividad, req.body.estado_actividad, req.body.descripción, req.body.fecha_inicio, req.body.fecha_termino, req.body.modalidad, req.body.requisitos, req.body.area]);
    res.json({
        id: resultado.insertId,
        ...req.body,
    });
}


export const eliminarSolicitud = async (req, res) => {
    const conexion = await connect();
    await conexion.query('DELETE FROM solicitud_deportiva WHERE tipo="Evento" AND id_solicitud = ?', [req.params.id,]);
    res.sendStatus(204);
}

export const eliminarEvento = async (req, res) => {
    const conexion = await connect();
    await conexion.query('DELETE FROM actividades WHERE codigo_actividad = ?', [req.params.id,]);
    res.sendStatus(204);
}


export const modificarSolicitud = async (req, res) => {
    const conexion = await connect();
    await conexion.query('UPDATE solicitud_deportiva SET ? WHERE id_solicitud = ?', [
        req.body,
        req.params.id
    ]);
    res.sendStatus(204);
}

export const modificarEvento = async (req, res) => {
    const conexion = await connect();
    await conexion.query('UPDATE actividades SET ? WHERE codigo_actividad = ?', [
        req.body,
        req.params.id
    ]);
    res.sendStatus(204);
}
