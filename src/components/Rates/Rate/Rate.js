import React from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import {makeOptions,formSelectOptions,updateObject} from '../../../shared/utility'

const Rate = (props)=>
    {
        //build menu of currencies using makeOptions Helper
        const currencies = makeOptions(props.currencies,'id','code')
        const users = makeOptions(props.users,'id','name')
    
        //update state form with new 
        let formUpdatedCurrency = formSelectOptions(props.rate,'rateForm','currency_id',currencies)     
        formUpdatedCurrency= updateObject(props.rate,{rateForm:formUpdatedCurrency})

        let formUpdated = formSelectOptions(formUpdatedCurrency,'rateForm','user_id',users)     
        formUpdated= updateObject(formUpdatedCurrency,{rateForm:formUpdated})
            
        
            const formElementArray = []
            for (let key in formUpdated.rateForm){
                formElementArray.push({
                    id:key,
                    config:formUpdated.rateForm[key]
                })
            }
        const form = ( 
            <div  style={{margin:'auto auto'}}> 
                <br/>                   
                <form 
                        className = {"col-md-8 card bg-light"}
                        onSubmit =  {props.rateHandler} 
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
                <Button btnType = 'Success' disabled = {!formUpdated.formIsValid} >New rate</Button>
            </form>
        </div>
    )
    
    
    return(
                <div>
                   {form}     
                </div>)
}
                

export default Rate