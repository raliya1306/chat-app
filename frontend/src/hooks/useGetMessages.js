import { useEffect } from 'react'
import useConversation from '../zustand/useConversation'
import { toast } from 'react-toastify'
import axios from 'axios'

const useGetMessages = () => {
  const { messages, setMessages, selectedConversation} = useConversation()
  
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`/api/messages/${selectedConversation._id}`)
        setMessages(res.data)
      } catch (error) {
        toast.error(error.message)
      }
    }
    if (selectedConversation?._id) getMessages()
  }, [selectedConversation?._id, setMessages])

    return { messages }
}

export default useGetMessages