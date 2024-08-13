import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
// import { useAuthContext } from '../context/AuthContext'

const useGetConversation = () => {
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    const getConversations = async () => {
        try {
        const res = await axios.get('/api/users')
        //setConversations(res.sort((a,b) => b.updatedAt - a.updatedAt))
                
        setConversations(res.data)
      } catch (error) {
        toast.error(error.message)
        console.log(error)
      } 
    }
    getConversations()
  }, [])

  return { conversations }
}

export default useGetConversation