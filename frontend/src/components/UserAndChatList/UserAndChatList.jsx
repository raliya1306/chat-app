import ChatList from '../ChatList/ChatList'
import UserInfo from '../UserInfo/UserInfo'
import './UserAndChatList.css'

const UserAndChatList = () => {
  return (
    <div className='userAndChatList'>
      <UserInfo />
      <ChatList />
    </div>
  )
}

export default UserAndChatList