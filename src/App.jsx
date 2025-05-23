import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Login } from './pages/Login'

// componente principal de la aplicacion
function App() {
  return (
    // se envuelve toda la aplicacion en el router
    <Router>
      {/* definicion de rutas */}
      <Routes>
        {/* ruta para el login */}
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
