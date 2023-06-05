import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';

import styles from './ErrorModal.module.css'

const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onHandleError}/>
}
const ErrorCard = props => {
  return (<Card className={styles.modal}>
  <header className={styles.header}>
      <h2>{props.title}</h2>
  </header>
  <div className={styles.content}>
      <p>{props.desc}</p>
  </div>
  <footer className={styles.actions}>
      <Button onClick={props.onHandleError}>Okay</Button>
  </footer>
</Card>);
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onHandleError={props.onHandleError}/>,document.getElementById('backdrop'))}
      {ReactDOM.createPortal(<ErrorCard  title={props.title} desc={props.desc} onHandleError={props.onHandleError}/>,document.getElementById('error-card'))}
    </React.Fragment>
  )
}

export default ErrorModal