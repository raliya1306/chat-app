import { useState } from 'react'
import './ChatList.css'
import AddUser from '../AddUser/AddUser'

const ChatList = () => {
  const [addChat, setAddChat] = useState(false)

  console.log(addChat)

  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src='search.png' alt='' />
          <input type='text' placeholder='Search' />
        </div>
        <img src='add-chat.png' alt='' className='add' onClick={() => setAddChat(prev => !prev)} />
      </div>
      <div className="chatItem">
        <img src='default-pfp.webp' alt='' />
        <div className="texts">
          <span>Claire Bailey</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src='default-pfp.webp' alt='' />
        <div className="texts">
          <span>Claire Bailey</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src='default-pfp.webp' alt='' />
        <div className="texts">
          <span>Claire Bailey</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src='default-pfp.webp' alt='' />
        <div className="texts">
          <span>Claire Bailey</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src='default-pfp.webp' alt='' />
        <div className="texts">
          <span>Claire Bailey</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src='default-pfp.webp' alt='' />
        <div className="texts">
          <span>Claire Bailey</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src='default-pfp.webp' alt='' />
        <div className="texts">
          <span>Claire Bailey</span>
          <p>Hello</p>
        </div>
      </div>
      {addChat && <AddUser />}
    </div>
  )
}

export default ChatList