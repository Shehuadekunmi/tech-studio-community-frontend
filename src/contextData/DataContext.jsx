import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

const DataContext = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    const login = (userToken) => {
        setToken(userToken);
        localStorage.setItem('token', userToken);
      };

      const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
      };

    const utilis = {
        token,
        login,
        logout,
    }

  return (
    <AuthContext.Provider value={utilis}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
    return useContext(AuthContext);
  }

export { DataContext, useAuth };