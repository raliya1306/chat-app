/* eslint-disable react/prop-types */
import './Chat.css'

const Chat = ({ conversation }) => {  
  return (
    <div className="chatItem">
      <img src={`http://localhost:3001/images/${conversation.avatar}` || 'default-pfp.webp'} alt='' />
      <div className="texts">
        <span>{conversation.username}</span>
      </div>
    </div>
  )
}

export default Chat