const APIsolicitudes = 'http://10.0.2.2:3000/respuesta/solicitudes'
const APIeventos = 'http://10.0.2.2:3000/respuesta/eventos'
export const getSolicitudes = async () =>{
    const res = await fetch(APIsolicitudes)
    return await res.json()
}

export const getEventos = async () =>{
    const res = await fetch(APIeventos)
    return await res.json()
}