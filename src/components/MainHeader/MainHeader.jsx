import React from 'react';

import Navigation from './Navigation.jsx';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>React App</h1>
      <Navigation/>
    </header>
  );
};

export default MainHeader;
