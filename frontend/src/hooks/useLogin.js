import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const login = async (email, password) => {
    setLoading(true)
    try {
      const res = await axios.post('/api/auth/login', { email, password })
      
      localStorage.setItem('user-info', JSON.stringify(res.data))
      setAuthUser(res.data)

    } catch (error) {
      toast.error(error.response.data.error)
    } finally {
      setLoading(false)
    }
  }
  return { loading, login }
}

export default useLogin