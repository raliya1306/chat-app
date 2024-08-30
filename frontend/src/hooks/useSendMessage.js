import axios from 'axios'
import useConversation from '../zustand/useConversation'
import { toast } from 'react-toastify'

const useSendMessage = () => {
  const { messages, setMessages, selectedConversation } = useConversation()

  const sendMessage = async (message) => {
    try {
      const res = await axios.post(`/api/messages/send/${selectedConversation._id}`, { message })

      setMessages([...messages, res.data])
    } catch (error) {
      toast.error(error.response)
    }
  }
  return { sendMessage }
}

export default useSendMessage