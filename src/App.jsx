import React, { useContext } from 'react';

import Login from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx';
import MainHeader from './components/MainHeader/MainHeader.jsx';
import { AuthContext } from './store/auth-context.jsx';

export default function App() {

  const ctx = useContext(AuthContext)

  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
      </React.Fragment>  
  );
}
