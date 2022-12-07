import { connect } from '../database';

// obtener todos los eventos
export const getEventos = async (req, res) => {
    const conexion = await connect();
    const [filas] = await conexion.query('SELECT categoria_evento.categoria, evento.* FROM evento LEFT JOIN categoria_evento ON categoria_evento.id_evento = evento.id WHERE evento.id = categoria_evento.id_evento and evento.estado = "Activo"');
    res.json(filas[1]);
}
//SELECT * FROM evento WHERE estado="Activo"

//obtener categoria de los eventos donde el id es igual a evento 
export const getCategoria = async (req, res) => {
    const conexion = await connect();
    const [filas] = await conexion.query('SELECT * from categoria_evento where id_evento in (select id from evento where estado="Activo");');
    res.json(filas);
}

//obtener el evento seleccionado
export const getEvento = async (req, res) => {
    const conexion = await connect();
    const [filas] = await conexion.query('SELECT e.*, c.* FROM evento AS e LEFT JOIN categoria_evento AS c ON c.id_evento = e.id WHERE e.id = ?', [req.params.id,]);
    res.json(filas[0]);
}

//hacer la inscripción al evento seleccionado(llenado del formulario)
export const crearSolicitud = async (req, res) => {
    const conexion = await connect();
    const [resultado] = await conexion.query('INSERT INTO persona(rut,nombres,apellidos,telefono_personal,telefono_contacto,correo,fecha_nacimiento,direccion,sexo,talla) VALUES(?,?,?,?,?,?,?,?,?,?)',
        [req.body.rut, req.body.nombres, req.body.apellidos, req.body.telefono_personal, req.body.telefono_contacto, req.body.correo, req.body.fecha_nacimiento, req.body.direccion, req.body.sexo, req.body.talla]);
    res.json({
        id: resultado.insertId,
        ...req.body,
    });
}


//establecer la inscripción
export const crearInscripcion = async (req, res) => {
    const conexion = await connect();
    const [resultado] = await conexion.query('INSERT INTO inscribe_evento (rut, id_evento, fecha, categoria) VALUES (?,?,?,?)',
        [req.body.rut, req.body.id_evento, req.body.fecha, req.body.categoria]);
    res.json({
        id: resultado.insertId,
        ...req.body,
    });
}