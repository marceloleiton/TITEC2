const API = 'http://192.168.1.87:3000/solicitud'

export const getSolicitudes = async () =>{
    const res = await fetch(API)
    return await res.json()
}