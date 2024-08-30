import { createContext, useContext, useEffect, useState } from 'react'
import { useAuthContext } from './AuthContext'
import io from 'socket.io-client'

export const SocketContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
  return useContext(SocketContext)
}

// eslint-disable-next-line react/prop-types
export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const { authUser } = useAuthContext()

  useEffect(() => {
    if(authUser) {
      const socket = io('http://localhost:3001', {
        query: {
          userId: authUser._id
        }
      })
      setSocket(socket)

      return () => socket.close()
    } else {
      if(socket) {
        socket.close()
        setSocket(null)
      }
    }
  }, [authUser])

  return <SocketContext.Provider value={{socket}}>{ children }</SocketContext.Provider>
}