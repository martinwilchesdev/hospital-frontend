import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

// paginas
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { PrivateRoute } from './components/PrivateRoute'
import { Dashboard } from './pages/Dashboard'
import { PublicRoute } from './components/PublicRoute'

// componente principal de la aplicacion
function App() {
    return (
        // se envuelve toda la aplicacion en el router
        <Router>
            {/* definicion de rutas */}
            <Routes>
                {/* ruta para el login */}
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                {/* ruta para el registro */}
                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />

                {/* ruta para acceder al dashboard */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    )
}

export default App
