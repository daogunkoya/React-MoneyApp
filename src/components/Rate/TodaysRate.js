import React from 'react'
import classes from './TodaysRate.css'

const rate = (props)=>(
    <div className = {classes.TodaysRate}>
        <strong>Rate: £{props.todaysrate}</strong>
    </div>
)

export default rate