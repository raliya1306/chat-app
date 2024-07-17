import { useState } from 'react'
import './SignUp.css'

const SignUp = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ''
  })

  const handleAvatar = (e) => {
    if(e.target.files[0]) {
      setAvatar({
        file:e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }    
  }

  return (
    <div className='signup'>
      <h2>CREATE AN ACCOUNT</h2>
      <form>
        <label htmlFor='file'>
          <img src={avatar.url || 'default-pfp.webp'} alt='' />
          Upload an image
        </label>
        <input type='file' id='file' style={{display: 'none'}} onChange={handleAvatar} />
        <input type='text' placeholder='Username' name='username' />
        <input type='text' placeholder='Email' name='email' />
        <input type='password' placeholder='Password' name='password' />
        <input type='password' placeholder='Confirm Password' name='confirmpassword' />        
        <button>SIGN UP</button>
        <a href='#'>Already have an account?</a>
      </form>
    </div>
  )
}

export default SignUp