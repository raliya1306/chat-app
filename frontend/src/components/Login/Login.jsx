import { toast } from 'react-toastify'
import './Login.css'

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    toast.warn('Hello')
  }

  return (
    <div className='login'>
        <h2 className='title'>LOGIN</h2>
      <form onSubmit={handleLogin}>
        <input type='text' placeholder='Email' name='email' />
        <input type='password' placeholder='Password' name='password' />        
        <button>Sign In</button>
        <a href='#'>{"Don't"} have an account?</a>
      </form>
    </div>
  )
}

export default Login