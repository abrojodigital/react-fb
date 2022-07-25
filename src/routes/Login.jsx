import { useContext, useState } from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router"

const Login = () => {
  const [email, setEmail] = useState('abrojodigital@gmail.com')
  const [password, setPassword] = useState('esquel9200')

  const { loginUser } = useContext(UserContext)

  const navegate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(`Procesando form... ${email} - ${password}`)
    try {
      await loginUser(email, password)
      navegate('/')
      console.log('Usuario logueado')
    } catch (error) {
      console.log(error.code)
    }
  }


  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email"
          placeholder="Ingrese Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input type="password"
          placeholder="Ingrese Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  )
}
export default Login