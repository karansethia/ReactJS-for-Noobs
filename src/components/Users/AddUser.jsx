import React, { useState } from 'react'
import styles from './AddUser.module.css'
import logo from './logo.png'

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = props => {

    const [name,setName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();
        if (name.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid Name and age',
                desc: 'Please enter a valid name and age'
            });
            return;
          }
          if (+age < 1) {
            setError({
                title: 'Invalid Age',
                desc: 'Please enter a valid age ,Age should be greater than 0'
            });
            return;
          }
        props.onAddUser(name,(age*525600));
        setAge('');
        setName('');

    }
    
    const setUserHandler = event => {
        setName(event.target.value);
    }
    const setAgeHandler = event => {
        setAge(event.target.value);
    }
    const errorHandler = () => {
        setError(null);
    }

  return (
    <div>
    {error && <ErrorModal title={error.title} desc={error.desc} onHandleError={errorHandler}/>}
    <Card className={styles.input}>
        <img src={logo} alt="" />
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Name</label>
            <input type="text" id="username" onChange={setUserHandler} value={name}/>
            <label htmlFor="age">Age (in years)</label>
            <input type="number" id="age" onChange={setAgeHandler} value={age}/>
            <Button type="submit">Calculate</Button>
        </form>
    </Card>
    </div>
  )
}

export default AddUser;