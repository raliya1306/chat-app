import { useState } from 'react'
import './AddUser.css'
import axios from 'axios'
import { toast } from 'react-toastify'


const AddUser = () => {
  const [user, setUser] = useState(null)
  const [close, setClose] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get('username')

    try {
      const res = await axios.post('/api/users/find', { username })
      if (res) {
        setUser(res.data)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.error)
    }
  }

  const handleAdd = async () => {
    try {
      const res = await axios.get(`/api/add-user/${user._id}` )
      if(res){
        toast.success('User successfully added')
        setClose(true)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.error)
    }
  }

  return (
    <>
    {!close && <div className='addUser'>
        <form onSubmit={handleSearch}>
        <input type='text' placeholder='Enter Username' name='username' />
        <button>Search</button>
        <img src='close.png' className='close' alt='' onClick={() => setClose(prev => !prev)} />
      </form>
      {user && <div className='user'>
        <div className='detail'>
          <img src={`http://localhost:3001/images/${user.avatar}` || 'default-pfp.webp'} alt='' />
          <span>{user.username}</span>
        </div>
        <button onClick={handleAdd}>Add User</button>
      </div>}
    </div> }
    </>
  )
}

export default AddUser