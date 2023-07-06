import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx';
import MainHeader from './components/MainHeader/MainHeader.jsx';
import AuthContext from './components/store/auth-context.jsx';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  useEffect(() => {
    const isUserLogged = localStorage.getItem('isLoggedIn');
    if (isUserLogged === '1') {
      console.log(isUserLogged);
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
      <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn
    }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>

      </AuthContext.Provider>
  );
}
