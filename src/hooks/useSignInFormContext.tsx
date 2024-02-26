import {useContext} from 'react'
import { SignInFormContext } from '../context/SignInFormContext';

export const useSignInFormContext = ()=> {
    const context = useContext(SignInFormContext);
    if (!context) {
      throw new Error('useSignInFormContext must be used within an AuthProvider');
    }
    return context;
  };
  