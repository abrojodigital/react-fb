import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Register = () => {
  const navegate = useNavigate();
  const { registerUser } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState,
    setError,
    getValues: { errors }
  } = useForm()

  const onSubmit = async ({email, password}) => {
    console.log(`Procesando form... ${email} - ${password}`)
    try {
      await registerUser(email, password)
      console.log('Usuario registrado')
      navegate('/')
    } catch (error) {
      console.log(error.code)
     switch (error.code) {
      case 'auth/email-already-in-use':
        setError('email', {
          message: 'El email ya está en uso'
        })
        break;
     
      default:
        console.log('Ocurrió un problema en el servidor')
     }
      }
    }
  }


  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email"
          placeholder="Ingrese Email"
          {...register("email", {
            required: {
              value: true,
              message: "El email es requerido"
            },
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/,
              message: "El email no es valido"
            }
          })
          }
        />
        {
          errors.email && <p>{errors.email.message}</p>
        }
        <input type="password"
          placeholder="Ingrese Password"
          {...register("password", {
            setValueAs: (value) => value.trim(),
            minLength: { value: 6, message: "Minimo 6 caracteres" },
            validate: {
              trim: (v) => {
                if (!v.trim()) {
                  return "El password no puede contener espacios"
                }
                return true
              }
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input type="password"
          placeholder="Re-ingrese Password"
          {...register("repassword", {
            setValueAs: (value) => value.trim(),
            validate: { equals: (value) => value === getValues("password") || "Las contraseñas no coinciden" }
          })
          }
        />
        {errors.repassword && <p>{errors.repassword.message}</p>}
        <button type="submit">Registrar</button>
      </form>
    </>
  );
}

export default Register;