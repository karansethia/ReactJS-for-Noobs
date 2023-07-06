import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
    isLoggedIn: false,   //! This default value is optional and will not affect the code but does help in intellisense
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export default function AuthContextProvider(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn', '0')
        setIsLoggedIn(false);
    };
    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '0');
        setIsLoggedIn(true);
    }

    useEffect(() => {
        const isUserLogged = localStorage.getItem('isLoggedIn');
        if (isUserLogged === '1') {
          console.log(isUserLogged);
          setIsLoggedIn(true);
        }
      }, [])

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler 
        }}>
            {props.children}
        </AuthContext.Provider>)
}

