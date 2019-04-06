import React from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import {makeOptions,formSelectOptions,updateObject} from '../../../shared/utility'

const Currency = (props)=>
    {
        const destinations = makeOptions(props.list,'id','destination')
    
        let formUpdated = formSelectOptions(props.currency,'currencyForm','destination',destinations)     
            formUpdated= updateObject(props.currency,{currencyForm:formUpdated})
            
        
            const formElementArray = []
            for (let key in formUpdated.currencyForm){
                formElementArray.push({
                    id:key,
                    config:formUpdated.currencyForm[key]
                })
            }
        const form = ( 
            <div  style={{margin:'auto auto'}}> 
                <br/>                   
                <form 
                        className = {"col-md-8 card bg-light"}
                        onSubmit =  {props.currencyHandler} 
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
                <Button btnType = 'Success' disabled = {!formUpdated.formIsValid} >New currency</Button>
            </form>
        </div>
    )
    
    
    return(
                <div>
                   {form}     
                </div>)
}
                

export default Currency