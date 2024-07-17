import './UserInfo.css'

const UserInfo = () => {
  return (
    <div className='userinfo'>
      <div className='user'>
        <img src='default-pfp.webp' alt=''/>
        <h4>Celaena Brooke</h4>
      </div>
      <img src='logout.png' alt='' className='logout' />
    </div>
  )
}

export default UserInfo