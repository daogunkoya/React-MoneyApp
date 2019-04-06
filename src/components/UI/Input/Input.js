import React from 'react'
import classes from './Input.css'

const input = (props)=>{
    let inputElement = null
    const inputClasses = [classes.InputElement]
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid)
    }

        switch(props.elementType){ 
            case('input'):
                inputElement = <input
                    className = {inputClasses.join(' ')} 
                    {...props.elementConfig}
                    value = {props.value}
                        onChange = {props.changed}
                    />
            break;
            case('textarea'):
                inputElement = <textarea 
                    className = {inputClasses.join(' ')} 
                    {...props.elementConfig}
                    value = {props.value}
                    onChange = {props.changed} />

            break;
            case('radio'):
                inputElement = <input 
                    className = {inputClasses.join(' ')} 
                    {...props.elementConfig}
                    value = {props.value}
                    onChange = {props.changed} />

            break;
            case('select'):
                inputElement = (
                <select 
                    className = {inputClasses.join(' ')} 
                    {...props.elementConfig}
                    value = {props.value}
                    onChange = {props.changed}
                     >
                       {props.elementConfig.placeholder?
                            <option defaultValue ="selected">{props.elementConfig.placeholder}</option>:null}
                   
                        {props.elementConfig.options.map((option,i)=>(
                            <option key = {i} value = {option.value}>
                                    {option.displayValue}
                            </option>
                        ))}
                    </select>)
            break;
            default:
                inputElement = <input 
                    className = {inputClasses.join(' ')} 
                    {...props.elementConfig}
                    value = {props.value}
                    onChange = {props.changed}
                    onKeyPress = {props.keypress}/> 
        }

        return (
                    <div className = {classes.Input}>
                        <label className = {classes.Label}>{props.label}</label>
                        {inputElement}
                    </div>
                )
}
export default input