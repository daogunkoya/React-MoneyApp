import React from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import {makeOptions,formSelectOptions,updateObject} from '../../../shared/utility'

const receiver = (props)=>
    {
        //build menu of currencies using makeOptions Helper
        const banks = makeOptions(props.banks,'id','name')
        //const senders = makeOptions(props.senders,'id','name')
        

        //update state form with new 
        let formUpdated = formSelectOptions(props.receiver,'receiverForm','bank',banks)   
            formUpdated= updateObject(props.receiver,{receiverForm:formUpdated})
            
        
            const formElementArray = []
            for (let key in formUpdated.receiverForm){
                formElementArray.push({
                    id:key,
                    config:formUpdated.receiverForm[key]
                })
            }
        const form = ( 
            <div  style={{margin:'auto auto'}}> 
                <br/>                   
                <form 
                        className = {"col-md-8 card bg-light"}
                        onSubmit =  {props.receiverHandler} 
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
                <Button btnType = 'Success' disabled = {!formUpdated.formIsValid} >New receiver</Button>
            </form>
        </div>
    )
    
    
    return(
                <div>
                   {form}     
                </div>)
}
                

export default receiver