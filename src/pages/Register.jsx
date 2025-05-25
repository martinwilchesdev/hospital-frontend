import { useState } from "react"
import api from "../api/apiClient"

export const Register = () => {
    // estados para almacenar el email, password y confirmacion del password ingresados por el usuario
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // funcion a ejecutar cuando se haga clic en el boton registrarse
    const handleRegister = async () => {
        try {
            const { data } = await api.post('/register', {
                name,
                email,
                password,
                password_confirmation: confirmPassword
            })

            // se almacena el token de autenticacion obtenido desde el backend en el localStorage
            localStorage.setItem('token', data)
            alert('Registro exitoso')
        } catch(error) {
            alert(error?.response?.data?.message ?? 'Ocurrio un error al realizar el registro')
        }
    }

    return(
        <form onSubmit={handleRegister} className="flex items-center justify-center min-h-screen bg-gray-100">
            {/* contenedor del formulario de inicio de sesion */}
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                {/* titulo */}
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Registrarse</h2>

                {/* campo de nombre de usuario */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Juan Peréz"
                        required
                    />
                </div>

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
                        required
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
                        required
                    />
                </div>

                {/* campo de confirmacion de contraseña */}
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirmar contraseña
                    </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="********"
                        required
                    />
                </div>

                {/* botón de login */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg transition duration-300 cursor-pointer hover:bg-blue-700"
                >
                    Registrarse
                </button>
            </div>
        </form>
    )
}