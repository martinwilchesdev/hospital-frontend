import axios from 'axios'

// instancia de axios configurada con la URL base de la API
const api = axios.create({
    baseURL: 'http://localhost:8000/api', // URL base del backend Laravel
    withCredentials: true // requerido por Sanctum si se usan cookies
})

// interceptor para adjuntar en cada solicitud el token si este existe
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        // se agrega el token al encabezado de autorizacion
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export default api

