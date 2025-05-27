import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/apiClient'

export const NavBar = () => {
    // estado utilizado para almacenar la informacion del usuario
    const [user, setUser] = useState()

    const navigate = useNavigate() // cambio de la ruta actual

    const handleLogout = () => {
        // se remueve el token de autorizacion guardado en el localStorage y se redigire el usuario a la ruta `/login`
        localStorage.removeItem('token')
        navigate('/login', { replace: true })
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get('/user')
                setUser(response.data)
            } catch (error) {
                alert('Ocurrio un error al obtener la información del usuario')
            }
        }

        // se llama la funcion que permite obtener la informacion del usuario autenticado
        fetchUser()
    }, [])

    return (
        <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">HOSPITAL</h1>

            <div className="flex items-center gap-4">
                {/* nombre de usuario */}
                {user && (
                    <span className="text-sm">
                        Bienvenido, <strong>{user.nombre}</strong>
                    </span>
                )}

                {/* boton para cerrar sesion */}
                <button
                    onClick={handleLogout}
                    className="bg-white text-blue-600 font-semibold px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-100 transition"
                >
                    Cerrar sesión
                </button>
            </div>
        </nav>
    )
}
