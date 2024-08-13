import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useAuthContext } from '../context/AuthContext'

const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const signUp = async (formData) => {
    setLoading(true)
    try {
      const res = await axios.post('/api/auth/signup', formData)
      if (res.status === 201) {
        toast.success('Account created!')
      }
      
      localStorage.setItem('user-info', JSON.stringify(res.data))
      setAuthUser(res.data)

    } catch (error) {
      toast.error(error.response.data.error)
    } finally {
      setLoading(false)
    }
  }
  return { loading, signUp }
}

export default useSignup