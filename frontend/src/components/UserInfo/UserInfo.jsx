import { useAuthContext } from '../../context/AuthContext'
import useLogout from '../../hooks/useLogout'
import './UserInfo.css'

const UserInfo = () => {
  const { loading, logout } = useLogout()
  const { authUser } = useAuthContext()

  return (
    <div className='userinfo'>
      <div className='user'>
        <img src={`http://localhost:3001/images/${authUser.avatar}` || 'default-pfp.webp'} alt=''/>
        <h4>{authUser.username}</h4>
      </div>
      {!loading ? (
        <img src='logout.png' alt='' className='logout' onClick={logout} />
      ) : (
        <img src='logout.png' alt='' className='disabled' />
      )}
    </div>
  )
}

export default UserInfo