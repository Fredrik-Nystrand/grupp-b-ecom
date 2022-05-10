import {useState} from 'react'



const Login = () => {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = (e) => {
    e.preventDefault()
  }


  return (
    <div className='signin'>
        <h1>LOGIN</h1>
        <form onSubmit={loginUser}>
            <p>Please enter your email and password:</p>
            <input type="email" placeholder="EMAIL" className="no-outline login-input" id="login-user" onChange={e => setUser(e.target.value)}/>
            <br></br>
            <input type="password" className="no-outline login-input" placeholder="PASSWORD" id="login-password" onChange={e => setPassword(e.target.value)} />
            <p>No user? Please <a href="#" className='signin'>register a user.</a></p>
            <div className='div-btn'>
            <button className='login-btn' type="submit">LOGIN</button>
            </div>
        </form>    
    
    </div>

  )
}

export default Login