import React from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import {makeOptions,formSelectOptions,updateObject} from '../../../shared/utility'

const Sender = (props)=>
    {
        //build menu of currencies using makeOptions Helper
        const currencies = makeOptions(props.currencies,'id','destination')
    
        //update state form with new 
        let formUpdated = formSelectOptions(props.sender,'senderForm','currencies',currencies)     
            formUpdated= updateObject(props.sender,{senderForm:formUpdated})
            
        
            const formElementArray = []
            for (let key in formUpdated.senderForm){
                formElementArray.push({
                    id:key,
                    config:formUpdated.senderForm[key]
                })
            }
        const form = ( 
            <div  style={{margin:'auto auto'}}> 
                <br/>                   
                <form 
                        className = {"col-md-8 card bg-light"}
                        onSubmit =  {props.senderHandler} 
                        disabled = {!formUpdated.formIsValid} >
                        {  
                            formElementArray.map(formElement =>{
                                return  <Input
                                            key = {formElement.id} 
                                            elementType = {formElement.config.elementType}
                                            elementConfig = {formElement.config.elementConfig}
                                            value = {formElement.config.value}
                                            shouldValidate = {formElement.config.validation}
                                            invalid = {!formElement.config.valid}
                                            touched = {formElement.config.touched}
                                            changed = {(event) =>props.inputChangedHandler(event,formElement.id)}/>
                            })
                        }
                <Button btnType = 'Success' disabled = {!formUpdated.formIsValid} >New sender</Button>
            </form>
        </div>
    )
    
    
    return(
                <div>
                   {form}     
                </div>)
}
                

export default Sender