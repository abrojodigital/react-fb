import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
// rutas
import Login from './routes/Login'
import Home from './routes/Home'
import Register from './routes/Register'
// componentes
import Navbar from './components/Navbar'
import RequiereAuth from './components/RequiereAuth'
// contexto
import {UserContext} from './context/UserProvider'

const App = () => {

  const {user} = useContext(UserContext)
  if(user === false){
    return <p>Loading...</p>
  }

  return (
    <>
      <Navbar />
      <h1>Hello APP</h1>
      <Routes>
        <Route path="/" element={
          <RequiereAuth>
            <Home />
          </RequiereAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </>
  )
}

export default App
