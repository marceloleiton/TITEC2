const API = 'http://127.0.0.1:3000/respuesta'

export const getSolicitudes = async () =>{
    const res = await fetch(API)
    return await res.json()
}