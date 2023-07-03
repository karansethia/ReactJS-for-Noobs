import React, {useState, useRef} from "react";
import styles from "./AddUser.module.css";
import logo from "./logo.png";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(nameInputRef); // !Prints the entire dom node
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Name and age",
        desc: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        desc: "Please enter a valid age ,Age should be greater than 0",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge * 525600);
    /*
    ? To empty the input tags you can just emplty the current.value like below
    ? nameInputRef.current.value = ''
    ! But it is not recommended to access and manipulate dom directly via this method, 
    ! that is why use 'useref' in case you just want to read a value and donot plan
    ! on changing it
    */


  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          desc={error.desc}
          onHandleError={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <img src={logo} alt="" />
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (in years)</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit">Calculate</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
