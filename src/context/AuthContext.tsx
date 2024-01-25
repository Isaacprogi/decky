// src/context/AuthContext.tsx
import React, { createContext, useState } from 'react';
import { AuthContextType,LoginData,  RegisterData, authError } from '../types/types';
import { loginApi, registerApi, refreshApi,logoutApi } from '../api/auth';
import { User } from '../types/types';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [user, setUser] = useState<User>({ id: "", fullName: '', email: '', avatar: '' });
  const [token, setToken] = useState<string | undefined>(Cookies.get('token'));
  const [error, setError] = useState<authError>({ login: "", register: "",logout:"", refresh: "" })

  const navigate = useNavigate()

  const login = async (user: LoginData) => {
    try {
      const { data } = await loginApi(user)
      const { accesstoken, ...others } = await data
      setUser(others)
      setToken(accesstoken)
      Cookies.set('token', accesstoken, {
        expires: 30 / (24 * 60),
        // secure: true,
        // sameSite: 'Strict',
      });

      navigate('/')
    } catch (error: any) {
      setError(prev => ({ ...prev, login: error?.response?.data }))
    }
  };

  const register = async (user: RegisterData) => {
    try {
      const { data } = await registerApi(user)
      const { accesstoken,...others } = await data
      setUser(others)
      setToken(accesstoken)
      Cookies.set('token', accesstoken, {
        expires: 30 / (24 * 60),
        // secure: true,
        // sameSite: 'Strict',
      });

      navigate('/')
    } catch (error: any) {
      setError(prev => ({ ...prev, register: error?.response?.data }))
    }
  };

  const logout = async () => {
    try {
      await logoutApi()
      setUser({ id: "", fullName: '', email: '', avatar: '' })
      setToken('')
      Cookies.remove('token', {
        // secure: true,
        // sameSite: 'Strict',
      });
      navigate('/login')
    } catch (error: any) {
      setError(prev => ({ ...prev, logout: error?.response?.data }))
    }
  };


  const refresh = async () => {
    try {
      const { data } = await refreshApi()
      const { accesstoken, ...others } = await data
      if (others) {
        setUser(others)
      }
      if(accesstoken){
        Cookies.set('token', accesstoken, {
          expires: 30 / (24 * 60),
          // secure: true,
          // sameSite: 'Strict',
        });
      }

    } catch (error: any) {
      setError(prev => ({ ...prev, refresh: error?.response?.data }))
    }
  };


  const contextValue: AuthContextType = {
    user,
    token,
    login,
    logout,
    setError,
    register,
    refresh,
    error,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

