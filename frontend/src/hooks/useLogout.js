import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import useConversation from '../zustand/useConversation'

const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()
  const { setSelectedConversation } = useConversation()

  const logout = async () => {
    setLoading(true)
    try {
      await axios.post('/api/auth/logout')
      localStorage.removeItem('user-info')
      setAuthUser(null)
      setSelectedConversation(null)
      toast.success('Succesfully logged out!') 
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, logout }
}

export default useLogout