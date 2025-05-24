import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

// paginas
import { Login } from './pages/Login'
import { Register } from './pages/Register'

// componente principal de la aplicacion
function App() {
  return (
    // se envuelve toda la aplicacion en el router
    <Router>
      {/* definicion de rutas */}
      <Routes>
        {/* ruta para el login */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
