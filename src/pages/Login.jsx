import { useState } from "react"
import api from "../api/apiClient"

export const Login = () => {
    // estados para almacenar el email y la contraseña introducidos por el usuario
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // funcion a ejecutar cuando se haga clic en el boton de iniciar sesion
    const handleLogin = async () => {
        try {
            // se envian los datos de login al backend
            const response = await api.post('/login', {
                email,
                password
            })

            localStorage.setItem('token', response.data)
        } catch(error) {
            alert(error.response.data.message ?? 'Ocurrio un error al realizar el inicio de sesión')
        }
    }

    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {/* contenedor del formulario de inicio de sesion */}
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                {/* titulo */}
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Iniciar sesión</h2>

                {/* campo de correo */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="usuario@correo.com"
                    />
                </div>

                {/* campo de contraseña */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="********"
                    />
                </div>

                {/* botón de login */}
                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg transition duration-300 cursor-pointer hover:bg-blue-700"
                >
                    Iniciar sesión
                </button>
            </div>
        </div>
    )
}