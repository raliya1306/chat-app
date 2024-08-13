import { useState } from 'react'
import './ChatList.css'
import AddUser from '../AddUser/AddUser'
import Chats from './Chats'

const ChatList = () => {
  const [addChat, setAddChat] = useState(false)

  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src='search.png' alt='' />
          <input type='text' placeholder='Search' />
        </div>
        <img src='add-chat.png' alt='' className='add' onClick={() => setAddChat(prev => !prev)} />
      </div>
      <Chats />
      {addChat && <AddUser />}
    </div>
  )
}

export default ChatList