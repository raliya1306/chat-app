import Notifications from './components/Notifications/Notifications'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './context/AuthContext'
import useLogout from './hooks/useLogout'

const App = () => {
  const { authUser } = useAuthContext()
  const { logout } = useLogout()

  setTimeout(() => {
    if (authUser){
      logout()
    }
  }, 1 *24 * 60 * 60 * 1000)

  return (
    <>
    <Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
      <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
      <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
    </Routes> 
    <Notifications /> 
  </>
  )
}

export default App