const APIsolicitudes = 'http://10.0.2.2:3000/respuesta/solicitudes'
const APIsolicitud = 'http://10.0.2.2:3000/respuesta/solicitud/'
const APIeventos = 'http://10.0.2.2:3000/respuesta/eventos'
const APIevento = 'http://10.0.2.2:3000/respuesta/evento'

export const getSolicitudes = async () =>{
    const res = await fetch(APIsolicitudes)
    return await res.json()
};

export const getEventos = async () =>{
    const res = await fetch(APIeventos)
    return await res.json()
};

export const crearSolicitud = async (newSolicitud) =>{
    const res = await fetch(APIsolicitud,{
        method: "POST",
        headers: { 
            Accept: "application/json", 
            "Content-Type": "application/json"},
        body: JSON.stringify(newSolicitud)
    });
    return await res.json();
};

export const getSolicitud = async () =>{
    await fetch(`${APIsolicitud}/${id}`,{method: "GET",
    });
    return await res.json()
};
