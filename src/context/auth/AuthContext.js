import { createContext, useReducer } from 'react'
import authReducer from './AuthReducer'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const initialState = { token: '' }

  const [state, dispatchAuth] = useReducer(authReducer, initialState)

  return(
    <AuthContext.Provider value={{ ...state, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext