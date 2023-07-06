import React,{ useContext } from 'react';

import Card from '../UI/Card/Card.jsx';
import classes from './Home.module.css';
import Button from '../UI/Button/Button.jsx';
import { AuthContext } from '../../store/auth-context.jsx';


const Home = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back Karan!</h1>
      <Button onClick={ctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
