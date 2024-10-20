/* eslint-disable react/prop-types */
import './Chat.css'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'

const Chat = ({ conversation }) => {  
  const { selectedConversation, setSelectedConversation } = useConversation()
  const { authUser } = useAuthContext()
  const isSelected = selectedConversation?._id === conversation._id

  return (
    <div className={`chatItem ${isSelected ? 'selectedChat' : ''}`}
    onClick={() => setSelectedConversation(conversation)}
    >
      <img src={conversation.blocked.includes(authUser._id) ? 'default-pfp.webp' : `http://localhost:3001/images/${conversation.avatar}` || 'default-pfp.webp'} alt='' />
      <div className="texts">
        <span>{conversation.username}</span>
      </div>
    </div>
  )
}

export default Chat