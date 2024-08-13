import axios from 'axios'
import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext)
}

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const { status } = error.response;
      if (status === 401) {
        localStorage.removeItem('user-info')      
      }
    }
  )
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('user-info')) || null)

  return <AuthContext.Provider value={{ authUser, setAuthUser }}>
    { children }
  </AuthContext.Provider>
}