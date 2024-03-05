import React from 'react'
import { AuthContextProvider } from '../context/AuthContext'
import { SignInFormContextProvider } from '../context/SignInFormContext'
import NoteContextProvider from '../context/NoteContext'

const Provider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <AuthContextProvider>
      <SignInFormContextProvider>
        <NoteContextProvider>
          {children}
        </NoteContextProvider>
      </SignInFormContextProvider>
    </AuthContextProvider>
  )
}

export default Provider