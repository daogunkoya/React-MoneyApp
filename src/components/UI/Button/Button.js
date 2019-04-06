import React from 'react'
import classes from './Button.css'

const button = (props)=>(
    <button 
            style = {{width:'100%'}}
            className = {[classes.Button, classes[props.btnType]].join(' ')}
            onClick = {props.clicked}
            disabled = {props.disabled}> {props.children}
        </button>
)
export default button