const APIsolicitudes = 'http://10.100.6.6:3000/respuesta/solicitudes'
const APIsolicitud = 'http://10.100.6.6:3000/respuesta/solicitud/'
const APIeventos = 'http://10.100.6.6:3000/respuesta/eventos'
const APIevento = 'http://10.100.6.6:3000/respuesta/evento'
const APIincripcion = 'http://10.100.6.6:3000/respuesta/inscripcion/'
const APIcategoria = 'http://10.100.6.6:3000/respuesta/categoria/'

export const getSolicitudes = async () => {
    const res = await fetch(APIsolicitudes)
    return await res.json()
};

export const getEventos = async () => {
    const res = await fetch(APIeventos)
    return await res.json()
};

export const crearSolicitud = async (newSolicitud) => {
    const res = await fetch(APIsolicitud, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSolicitud)
    });
    return await res.json();
};

export const crearInscripcion = async (newInscripcion) => {
    const res = await fetch(APIincripcion, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInscripcion)
    });
    return await res.json();
};

export const getSolicitud = async () => {
    const res = await fetch(APIsolicitud, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    return await res.json()
};

export const getCategoria = async () => {
    const res = await fetch(APIcategoria, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    return await res.json()
}