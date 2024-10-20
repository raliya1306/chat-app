import { useEffect, useRef, useState } from 'react'
import './Messages.css'
import EmojiPicker from 'emoji-picker-react'
import useConversation from '../../zustand/useConversation'
import useSendMessage from '../../hooks/useSendMessage'
import useGetMessages from '../../hooks/useGetMessages'
import Message from './Message'
import useListenMessages from '../../hooks/useListenMessages'
import useBlockUser from '../../hooks/useBlockUser'
import { useAuthContext } from '../../context/AuthContext'

const Messages = () => {
  const [openEmoji, setOpenEmoji] = useState(false)
  const [text, setText] = useState('')
  const { selectedConversation, setSelectedConversation, setIsCurrentUserBlocked, isCurrentUserBlocked, setIsReceiverBlocked, isReceiverBlocked } = useConversation()
  const { authUser } = useAuthContext()
  const { sendMessage } = useSendMessage()
  const { blockUser } = useBlockUser()
  const { messages } = useGetMessages()
  useListenMessages()

  const messageEnd = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      messageEnd.current?.scrollIntoView({ behaviour: 'smooth' })
    }, 100)    
  }, [messages])

  useEffect(() => {
    if(selectedConversation.blocked.includes(authUser._id)) {
      setIsCurrentUserBlocked(true)      
    }
    if(authUser.blocked.includes(selectedConversation._id)) {
      setIsReceiverBlocked(true)
    }
   }, [selectedConversation])

   useEffect(() => {
    if(authUser.blocked.includes(selectedConversation._id)) {        
        setIsReceiverBlocked(true)
      } else {
        setIsReceiverBlocked(false)
      }       
  }, [authUser])
  
  const handleEmoji = (e) => {
    setText(prev => prev + e.emoji)
    setOpenEmoji(false)
  }

  const handleClose = () => {
    setSelectedConversation(null)
    setIsCurrentUserBlocked(false)
    setIsReceiverBlocked(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!text) return
    await sendMessage(text)
    setText('')
  }
  const handleBlock = async () => {
    await blockUser()
  }

  return (
    <div className='messageContainer'>
      <div className="top">
        <div className="user">
          <img src='back.png' alt='' className='close' onClick={handleClose} />
          <img src={isCurrentUserBlocked ? 'default-pfp.webp' : `http://localhost:3001/images/${selectedConversation?.avatar}` || 'default-pfp.webp'} alt='' />
          <span>{selectedConversation?.username}</span>
        </div>
        <button onClick={handleBlock}>{
          isReceiverBlocked ? "User Blocked" : "Block User"
          }</button>
      </div>
      <div className="center">
        {messages.length === 0 && (
          <p className='startConvo'>Send a message to start the conversation</p>
        )}
        {messages.length > 0 && messages.map((message) => <Message key={message._id} message={message} />)}
        <div ref={messageEnd}></div>
      </div>
      <div className="bottom">
        <form onSubmit={handleSubmit} >
          <img src='attach.png' alt='' className={`attach ${isCurrentUserBlocked || isReceiverBlocked ? 'disabled' : '' }`} />
          <input type='text' placeholder={isCurrentUserBlocked || isReceiverBlocked ? 'You cannot send a message' : 'Your message' } value={text} onChange={e => setText(e.target.value)} disabled={isCurrentUserBlocked || isReceiverBlocked}/>
          <div className="emoji">
            <img src='smiley.png' alt='' onClick={() => setOpenEmoji(prev => !prev)} />
            <div className="emojiPicker">
              <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} height={350} width={350} />
            </div>
          </div>
          <button>
          <img src='send.png' alt='' className={`sendButton ${isCurrentUserBlocked || isReceiverBlocked ? 'disabled' : '' }`}/>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Messages