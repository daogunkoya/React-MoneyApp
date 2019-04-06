import React from 'react'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import classes from './createBank.css'

const createBank = ()=>{
    return(
        <div>
             <form onSubmit =  {this.formHandler} >
                            <div className={classes.row}>
                                    <div className={classes.col}>
                                        <label for="Bank">Bank</label>
                                        <Input id="bank" checked="checked" name="type" type="radio" value="b"/>
                                     </div>
                                     <div className={classes.col}>
                                                <label for="Naira">Naira &#8358;</label>
                                                <Input id="pickup" name="type" type="radio" value="p"/>
                                        </div>
                            </div>
                               <Input
                                        elementType = {formElement.config.elementType}
                                        elementConfig = {{placeholder:'New Bank',type :'text'}}
                                        value = {""}
                                        changed = {(event) =>this.inputChangedHandler(event,formElement.id)}/>
                                    
                            
                            <Button btnType = 'Success' disabled = {!this.state.formIsValid} >Submit</Button>
                </form>
        </div>
    )
}

export default createBank