import Messages from '../Messages/Messages'
import UserAndChatList from '../UserAndChatList/UserAndChatList'
import './Home.css'

const Home = () => {
  return (
    <div className='container'>
      <UserAndChatList />
      <Messages />
    </div>
  )
}

export default Home