import {useState} from 'react'

const Register = () => {

  const [registerUser, setRegisterUser] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
  }

  return (
    <div className='signin'>
        <h1>NEW USER</h1>
        <form>
            <p>Please register your email and password:</p>
            <input type="email" placeholder="EMAIL" className="no-outline login-input" id="register-user" onChange={e => setRegisterUser(e.target.value)}/>
            <br></br>
            <input type="password" className="no-outline login-input" placeholder="PASSWORD" id="register-password" onChange={e => setRegisterPassword(e.target.value)} />
            <div className='div-btn'>
            <button className='login-btn' type="submit">REGISTER</button>
            </div>
            
        </form>    

    </div>
  )
}

export default Register