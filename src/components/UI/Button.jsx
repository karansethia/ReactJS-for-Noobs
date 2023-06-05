import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <button className={`${props.className} ${styles.button}`} type={props.type} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button