import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token')

    // si no existe un token de autenticacion en el localStorage, se redirige el usuario al login
    if (!token) {
        /**
         * replace permite que no se guarde la URL actual en el historial del navegador
         * se evita que el usuario pueda presionar atras en el navegador y volver a la ruta protegida "dashboard", despues de haber sido redirigido a la ruta anterior por no estar autenticado
         */
        return <Navigate to="/login" replace />
    }

    // si hay un token de autenticacion en el localStorage, se muestra la ruta protegida
    return children
}
