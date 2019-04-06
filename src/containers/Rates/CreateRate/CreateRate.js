import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './CreateRate.css'
import axios from '../../../axios-orders'
import Input from '../../../components/UI/Input/Input'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index'
import {checkValidity} from '../../../shared/Validations'
import {fields} from './formFields'
import {makeOptions, formSelectOptions} from '../../../shared/utility'


class CreateRate extends Component{
    state = fields
    
    componentDidMount(){
        this.props.todaysrate();
        this.props.onInitUsers();
        const users = makeOptions(this.props.users,'id','name')

        const formUpdated = formSelectOptions(this.state,'rateForm','user_id',users)
 
        
        this.setState({rateForm:formUpdated})
       
    }
    
    

rateHandler = (event)=>{
    event.preventDefault();

        this.setState({loading:true})
        const formData = {}
        for(let formElementIdentifier in this.state.rateForm){
            formData[formElementIdentifier] = this.state.rateForm[formElementIdentifier].value
        }
         const newRates = {
            ...formData,
            user_id:0
       }
       console.log('new form-rates=',newRates)

       this.props.onCreateRate(newRates)
      
    
    }
    
    

    inputChangedHandler = (event,inputIdentifier)=>{
        const updatedrateForm = {...this.state.rateForm}
        const updatedFormElement = {
            ...updatedrateForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value
        updatedFormElement.valid = checkValidity(updatedFormElement.value,updatedFormElement.validation)
        updatedFormElement.touched = true
        updatedrateForm[inputIdentifier] = updatedFormElement

        let formIsValid = true
        for(let inputIdentifier in updatedrateForm){
            formIsValid = updatedrateForm[inputIdentifier].valid && formIsValid
        }
        console.log(formIsValid)
        this.setState({rateForm:updatedrateForm,formIsValid:formIsValid})
        //console.log(updatedFormElement)
    }
        render()
        {
            const formElementArray = []
            for (let key in this.state.rateForm){
                formElementArray.push({
                    id:key,
                    config:this.state.rateForm[key]
                })
            }
            let form = (
                        <div>
                                
                                <form onSubmit =  {this.rateHandler} disabled = {!this.state.formIsValid}>
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
                                                        changed = {(event) =>this.inputChangedHandler(event,formElement.id)}/>
                                        })
                            
                                    
                                    }
                                
                                <Button btnType = 'Success' disabled = {!this.state.formIsValid} >Order</Button>
                            </form>
                        </div>
            )

            form = this.props.loading?<Spinner/>:form
        
            
            return(
                <div className = {classes.ContactRate}>
                    <div>
                         <h6>New Rate</h6>
                    </div>
                    {form}
                </div>
            )
        
        }
        
        
    }

    const mapStateToProps = state =>{
        return {
            users:state.user.list,
             mainRate:state.rate.todaysrate,
             nigeria_uk:state.rate.nigeria_uk,
            // loading:state.order.loading
            
        }
    }
    const mapDispatchToProps  = dispatch => {
        return {
            onInitUsers:()=>dispatch(actions.initUser()),
           todaysrate:()=>dispatch(actions.initTodaysRate()),
           onCreateRate:newRates=>dispatch(actions.createRate(newRates))
        }
    }

    

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(CreateRate,axios))
