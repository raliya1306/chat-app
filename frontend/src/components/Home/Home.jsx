import useConversation from '../../zustand/useConversation'
import Messages from '../Messages/Messages'
import UserAndChatList from '../UserAndChatList/UserAndChatList'
import './Home.css'

const Home = () => {
  const { selectedConversation } = useConversation()

   return (
    <div className='container'>
      {!selectedConversation && <UserAndChatList />}
      {selectedConversation && <Messages />}
    </div>
  )
}

export default Home