import { useContext, useNavigate } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const Navbar = () => {
  const { user, signOutUser } = useContext(UserContext)

  const handleClickLogout = async () => {
    try {
      await signOutUser()
    } catch (error) {
      console.log(error.code)
    }
  }

  return (
    <div>
      {
        user ? (
          <>
            <NavLink to="/">Home | </NavLink>
            <button onClick={handleClickLogout}>Desconectar</button>

          </>
        ) : (
          <>
            <NavLink to="/login">Login | </NavLink>
            <NavLink to="/register">Registrar | </NavLink>
          </>
        )
      }
    </div>
  )
}

export default Navbar