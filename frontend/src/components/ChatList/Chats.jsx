import useGetConversation from '../../hooks/useGetConversation'
import Chat from './Chat'

const Chats = ({ search }) => {
  const { conversations } = useGetConversation()
  const filteredConversations = conversations.filter((c) =>
  c.username.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {filteredConversations.map(conversation => (
          <Chat
            key={conversation._id}
            conversation={conversation}
          />  
      ))}
    </>
  )
}

export default Chats