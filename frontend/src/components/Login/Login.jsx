import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useLogin from '../../hooks/useLogin'
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { loading, login } = useLogin()

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      toast.error('Please fill in all the fields')      
    } else {
      await login(email, password)
     }
  }

  return (
    <div className='login'>
        <h2 className='title'>LOGIN</h2>
      <form onSubmit={handleLogin}>
        <input type='text' placeholder='Email' name='email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <input type='password' placeholder='Password' name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} />        
        <button disabled={loading}>{loading ? 'Loading' : 'SIGN IN'}</button>
        <Link to='/signup' className='link'>{"Don't"} have an account?</Link>
      </form>
    </div>
  )
}

export default Login