import { toast } from 'react-toastify'
import useConversation from '../zustand/useConversation'
import axios from 'axios'

const useBlockUser = () => {
  const { selectedConversation, isReceiverBlocked, setIsReceiverBlocked } = useConversation()

  const blockUser = async () => {
    try {
      const res = await axios.get(`api/block/${selectedConversation._id}`)

      setIsReceiverBlocked([...isReceiverBlocked, res.data])
    } catch (error) {
      toast.error(error.response)
    }
  }
  return { blockUser }
}

export default useBlockUser