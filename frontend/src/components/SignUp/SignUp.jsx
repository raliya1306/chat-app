import { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
import { toast } from 'react-toastify'

const SignUp = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ''
  })

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatar: ''
  })

  const { loading, signUp } = useSignup()

  const handleAvatar = (e) => {
    if(e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })            
      setInputs({ ...inputs, avatar: e.target.files[0] })
    }        
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputs.username || !inputs.email || !inputs.password || !inputs.confirmPassword) {
      toast.error('Please fill in all the fields')      
    }
    else if (inputs.password !== inputs.confirmPassword) {
      toast.error('Passwords do not match')
    }
    else if (inputs.password.length < 5) {
      toast.error('Password must have atleast 5 characters')
    } else if (!inputs.avatar) {
      toast.error('Profile picture not uploaded')
    } else {
      var formData = new FormData()
      formData.append('username', inputs.username)
      formData.append('email', inputs.email)
      formData.append('password', inputs.password)
      formData.append('confirmPassword', inputs.confirmPassword)
      formData.append('avatar', inputs.avatar)
      await signUp(formData)      
    }    
  }

  return (
    <div className='signup'>
      <h2>CREATE AN ACCOUNT</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='file'>
          <img src={avatar.url || 'default-pfp.webp'} alt='' />
          Upload an image
        </label>
        <input type='file' id='file' name='avatar' style={{display: 'none'}} onChange={handleAvatar} />
        <input type='text' placeholder='Username' name='username' 
          value={inputs.username}
          onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        />
        <input type='text' placeholder='Email' name='email' 
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
        <input type='password' placeholder='Password' name='password' 
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <input type='password' placeholder='Confirm Password' name='confirmpassword' 
        value={inputs.confirmPassword}
        onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
        />        
        <button disabled={loading}>{loading ? 'Loading' : 'SIGN UP'}</button>
        <Link to='/login' className='link'>Already have an account?</Link>
      </form>
    </div>
  )
}

export default SignUp