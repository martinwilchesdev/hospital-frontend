import { Navigate } from "react-router-dom"

export const PublicRoute = ({ children }) => {
    const token = localStorage.getItem('token')

    // si existe un token en el localStorage, el usuario automaticamente es redirigido al dashboard
    if (token) {
        return <Navigate to="/dashboard" replace />
    }

    // si existe un toen de autenticacion, se accede a la ruta protegida
    return children
}
