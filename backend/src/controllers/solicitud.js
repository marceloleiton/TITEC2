import {connect} from '../database';

export const getSolicitudes = async (req, res) =>{
    const conexion = await connect();
    const[filas]= await conexion.query('SELECT * FROM solicitud_deportiva');
    res.json(filas);
}
export const getSolicitud = async (req, res) =>{
    //podríamos hacer la excepción en caso de no existir ese id
    const conexion = await connect();
    const[filas]= await conexion.query('SELECT * FROM solicitud_deportiva WHERE id_solicitud=?',[req.params.id,]);
    res.json(filas[0]);
}
export const getSolicitudCount =  async (req, res) =>{
    const conexion = await connect();
    const[filas]= await conexion.query("SELECT COUNT(*) FROM solicitud_deportiva");
    console.log(filas)
    res.json(filas[0]["COUNT(*)"]);
}
export const saveSolicitud = async (req,res) =>{
    res.send('hello world !')
}

export const deleteSolicitud = async(req,res) =>{
    res.send('hello world !')
}

export const updateSolicitud = async (req,res) =>{
    res.send('hello world !')
}