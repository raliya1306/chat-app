import useGetConversation from '../../hooks/useGetConversation'
import Chat from './Chat'

const Chats = () => {
  const { conversations } = useGetConversation()

  return (
    <>
      {conversations.map(conversation => (
          <Chat
            key={conversation._id}
            conversation={conversation}
          />  
      ))}
    </>
  )
}

export default Chats