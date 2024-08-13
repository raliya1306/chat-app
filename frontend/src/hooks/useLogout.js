import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const logout = async () => {
    setLoading(true)
    try {
      await axios.post('/api/auth/logout')
      localStorage.removeItem('user-info')
      setAuthUser(null)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, logout }
}

export default useLogout