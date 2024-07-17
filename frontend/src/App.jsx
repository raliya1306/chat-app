import Chat from './components/Chat/Chat'
import Notifications from './components/Notifications/Notifications'
import Login from './components/Login/Login'
//import SignUp from './components/SignUp/SignUp'
import UserAndChatList from './components/UserAndChatList/UserAndChatList'

const App = () => {
  const user = true

  return (
    <>
    {user ? (
      <div className='container'>
        <UserAndChatList />
        <Chat />
      </div>
    ) : (
      <Login />     
    )}
    <Notifications />    
    </>    
  )
}

export default App