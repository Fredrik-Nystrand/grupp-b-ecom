import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../store/actions/authActions'

const Register = () => {

  const dispatch = useDispatch()

  const {loading, error} = useSelector(state => state.authReducer)

  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerPasswordCheck, setRegisterPasswordCheck] = useState('')
  const [registerName, setRegisterName] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()

    if(registerPassword === registerPasswordCheck) {
      dispatch(registerUser({
        name:  registerName,
        email: registerEmail,
        password: registerPassword,
      }))
    } else {
      // skriv ett meddelande till användaren att det inte gick bra
    }

    
  }

  return (
    <div className='signin content'>
        <h1>NEW USER</h1>
        <form onSubmit={handleRegister}>
            <p>Please register your email and password:</p>
            <input type="text" placeholder="NAME" className="no-outline login-input" id="register-name" onChange={e => setRegisterName(e.target.value)}/>
            <input type="email" placeholder="EMAIL" className="no-outline login-input" id="register-user" onChange={e => setRegisterEmail(e.target.value)}/>
            <br></br>
            <input type="password" className="no-outline login-input" placeholder="PASSWORD" id="register-password" onChange={e => setRegisterPassword(e.target.value)} />
            <input type="password" className="no-outline login-input" placeholder="CONFIRM PASSWORD" id="register-password-check" onChange={e => setRegisterPasswordCheck(e.target.value)} />
            <div className='div-btn'>
            <button className='login-btn' type="submit">REGISTER</button>
            </div>
            
        </form>    

    </div>
  )
}

export default Register