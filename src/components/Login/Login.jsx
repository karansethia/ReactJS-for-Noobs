import React, {useState, useEffect, useReducer, useContext} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import {AuthContext} from "../../store/auth-context";

const emailReducer = (state, action) => {
  console.log("in email reducer");

  if (action.type == "USER_INPUT") {
    // console.log("action's value",action.val);
    return {value: action.val, isValid: action.val.includes("@")};
  }
  if (action.type == "INPUT_BLUR") {
    // console.log("state's value",state.value);
    return {value: state.value, isValid: state.value.includes("@")};
  }

  return {value: "", isValid: false};
};
const passwordReducer = (state, action) => {
  if (action.type == "USER_INPUT") {
    // console.log("action's value",action.val);
    return {value: action.val, isValid: action.val.trim().length > 6};
  }
  if (action.type == "INPUT_BLUR") {
    // console.log("state's value",state.value);
    return {value: state.value, isValid: state.value.trim().length > 6};
  }

  return {value: "", isValid: false};
};

const Login = (props) => {
  const ctx = useContext(AuthContext);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });
  const [passState, dispatchPass] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  const {isValid: emailIsValid} = emailState; // assigns the isvalid property of emailstate obejct to emaiIsValid constant
  const {isValid: passIsValid} = passState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(
        // emailState.isValid && passState.isValid  //? If we use states themselves for validation we might rerun the useeffect even after the validation is complete since useeefect responds to just plain change and not the logic of change
        emailIsValid && passIsValid
      );
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: "USER_INPUT", val: event.target.value});

    // setFormIsValid(
    //   event.target.value.includes('@') && passState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPass({type: "USER_INPUT", val: event.target.value});

    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: "INPUT_BLUR"});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPass({type: "INPUT_BLUR"});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          text="E-mail"
          type="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailState.isValid}
        />
        <Input
          id="password"
          text="Password"
          type="password"
          value={passState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passState.isValid}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
