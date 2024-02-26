import React from 'react'
import { AuthContextProvider } from '../context/AuthContext'
import { SignInFormContextProvider } from '../context/SignInFormContext'

const Provider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <AuthContextProvider>
     <SignInFormContextProvider>
      {children}
     </SignInFormContextProvider>
    </AuthContextProvider>
  )
}

export default Provider