import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('role') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    user : JSON.parse(localStorage.getItem('user')||'null'),

  });

  const login = async (email, password) => {
    try {
      const res = await fetch('https://localhost:7156/api/Login/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error('Login failed');

      const data = await res.json();

      // localStorage.setItem('token', data.token);
      // localStorage.setItem('role', data.role);

      const {token , user} = data;
      localStorage.setItem('token' ,token);
      localStorage.setItem('role', user.role);
      localStorage.setItem('user', JSON.stringify(user));
      setAuth({
        token,
        role: user.role,
        isAuthenticated: true,
        user,
      });

      return { success: true };
    } catch (err) {
      console.error('Login error:', err);
      return { success: false, message: err.message };
    }
  };


  const logout =()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setAuth({
      token: null,
      role: null,
      isAuthenticated: false,
      user :null
    });
    
  }

  return (
    <AuthContext.Provider value={{ auth, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
