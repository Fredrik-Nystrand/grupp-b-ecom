import {useState, useEffect} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../store/actions/authActions'

const Login = () => {

  const {loading, error, token} = useSelector(state => state.authReducer)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
   if(token){
     navigate(state?.from || "/")
   } 
  }, [token, navigate])

  const handleLogin = (e) => {
    e.preventDefault()

    dispatch(loginUser({
      email: user,
      password,
    }))

  }


  return (
    <div className='signin content'>
        <h1>LOGIN</h1>
        <form onSubmit={handleLogin}>
            <p>Please enter your email and password:</p>
            <input type="email" placeholder="EMAIL" className="no-outline login-input" id="login-user" onChange={e => setUser(e.target.value)}/>
            <br></br>
            <input type="password" className="no-outline login-input" placeholder="PASSWORD" id="login-password" onChange={e => setPassword(e.target.value)} />
            <p>No user? Please <Link to="/register" className='signin'>register a user.</Link></p>
            <div className='div-btn'>
            <button className='login-btn' type="submit">LOGIN</button>
            </div>
        </form>    
    
    </div>

  )
}

export default Login