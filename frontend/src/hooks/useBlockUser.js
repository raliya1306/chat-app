import { toast } from 'react-toastify'
import useConversation from '../zustand/useConversation'
import axios from 'axios'
import { useAuthContext } from '../context/AuthContext'

const useBlockUser = () => {
  const { selectedConversation } = useConversation()
  const { setAuthUser } = useAuthContext()

  const blockUser = async () => {
    try {
      const res = await axios.get(`api/block/${selectedConversation._id}`)
      localStorage.setItem('user-info', JSON.stringify(res.data))
      setAuthUser(res.data)        
    } catch (error) {
      toast.error(error.response)
    }
  }
  return { blockUser }
}

export default useBlockUser