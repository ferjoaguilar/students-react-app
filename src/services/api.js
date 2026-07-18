import axios from 'axios'

// CREAR UNA INSTANCIA DE AXIOS
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'x-api-key': import.meta.env.VITE_API_KEY
    }
})

// INTERCEPTOR
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const message = error.response?.data?.message ||
            (error.request && !error.response ? "No se puedo conectar al servidor" : "No se pudo completar su solicitud")

        return Promise.reject(new Error(message))
    }
)

// CREAR LAS PETICIONES API