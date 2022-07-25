import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Register = () => {
  const [email, setEmail] = useState('abrojodigital@gmail.com')
  const [password, setPassword] = useState('esquel9200')

  const { registerUser } = useContext(UserContext)
  const navegate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(`Procesando form... ${email} - ${password}`)
    try {
      await registerUser(email, password)
      navegate('/')
      console.log('Usuario registrado')
    } catch (error) {
      console.log(error.code)
    }
  }

  return (
    <>
      <h1>Register</h1>
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
        <button type="submit">Registrar</button>
      </form>
    </>
  );
}

export default Register;