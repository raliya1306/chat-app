import './AddUser.css'

const AddUser = () => {
  return (
    <div className='addUser'>
      <form>
        <input type='text' placeholder='Enter Username' name='username' />
        <button>Search</button>
      </form>
      <div className='user'>
        <div className='detail'>
          <img src='default-pfp.webp' alt='' />
          <span>Claire Bailey</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  )
}

export default AddUser