import React from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import {makeOptions,formSelectOptions,updateObject} from '../../../shared/utility'

const Commission = (props)=>
    {
        
        //build menu of currencies using makeOptions Helper
        const currencies = makeOptions(props.currencies,'id','code')
        const users = makeOptions(props.users,'id','name')
    
        //update state form with new 
        let formUpdatedCurrency = formSelectOptions(props.commission,'commissionForm','currency_id',currencies)     
        formUpdatedCurrency= updateObject(props.commission,{commissionForm:formUpdatedCurrency})

        let formUpdated = formSelectOptions(formUpdatedCurrency,'commissionForm','user_id',users)     
        formUpdated= updateObject(formUpdatedCurrency,{commissionForm:formUpdated})
            
        
            const formElementArray = []
            for (let key in formUpdated.commissionForm){
                formElementArray.push({
                    id:key,
                    config:formUpdated.commissionForm[key]
                })
            }
        const form = ( 
            <div  style={{margin:'auto auto'}}> 
                <br/>                   
                <form 
                        className = {"col-md-8 card bg-light"}
                        onSubmit =  {props.commissionHandler} 
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
                <Button btnType = 'Success' disabled = {!formUpdated.formIsValid} >New commission</Button>
            </form>
        </div>
    )
    
    
    return(
                <div>
                   {form}     
                </div>)
}
                

export default Commission