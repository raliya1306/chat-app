/* eslint-disable react/prop-types */
import { useAuthContext } from '../../context/AuthContext'
import { extractTime } from '../../utils/extractTime'
import useConversation from '../../zustand/useConversation'
import './Message.css'

const Message = ({ message }) => {
 const { authUser } = useAuthContext()
 const { selectedConversation } = useConversation()
 const fromCurrentUser = message.senderId === authUser._id
 const time = extractTime(message.createdAt)

  return (
    <div className={`message ${fromCurrentUser ? 'mine' : ''}`}>
          {!fromCurrentUser && <img src={`http://localhost:3001/images/${selectedConversation?.avatar}` || 'default-pfp.webp'} alt='' />}
          <div className="text">
            <p>{message.message}</p>
            <span>{time}</span>
          </div>
    </div>
  )
}

export default Message