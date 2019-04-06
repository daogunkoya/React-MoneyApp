import React from 'react'
import classes from './ListItem.css'
import {NavLink} from 'react-router-dom'

const navigationItem = (props) =>(
    <li className = "list-group-item">
        <NavLink
         to={props.link}
         exact= {props.exact}
         activeClassName = {classes.active}
         >{props.children}
        </NavLink >
    </li>
)   
export default navigationItem
