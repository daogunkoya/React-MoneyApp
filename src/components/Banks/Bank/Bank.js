import React from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import {makeOptions,formSelectOptions,updateObject} from '../../../shared/utility'

const Bank = (props)=>
    {
   
        //build menu of currencies using makeOptions Helper
        const currencies = makeOptions(props.currencies,'id','code')
        const users = makeOptions(props.users,'id','name')
    
        //update state form with new 
        let formUpdatedCurrency = formSelectOptions(props.bank,'bankForm','currency_id',currencies)     
        formUpdatedCurrency= updateObject(props.bank,{bankForm:formUpdatedCurrency})

        let formUpdated = formSelectOptions(formUpdatedCurrency,'bankForm','user_id',users)     
        formUpdated= updateObject(formUpdatedCurrency,{bankForm:formUpdated})
            
        
            const formElementArray = []
            for (let key in formUpdated.bankForm){
                formElementArray.push({
                    id:key,
                    config:formUpdated.bankForm[key]
                })
            }
        const form = ( 
            <div  style={{margin:'auto auto'}}> 
                <br/>                   
                <form 
                        className = {"col-md-8 card bg-light"}
                        onSubmit =  {props.bankHandler} 
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
                <Button btnType = 'Success' disabled = {!formUpdated.formIsValid} >New bank</Button>
            </form>
        </div>
    )
    
    
    return(
                <div>
                   {form}     
                </div>)
}
                

export default Bank