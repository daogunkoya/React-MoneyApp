import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './CreateReceiver.css'
import axios from '../../../axios-orders'
import Input from '../../../components/UI/Input/Input'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index'

class CreateReceiver extends Component{
    
    state =
    componentDidMount(){
        this.props.onInitUser();
        this.props.onInitSender(this.props.user.id);
        this.props.onInitBanks();

        // console.log('id:',this.props.user.name);
        // console.log('banks=',this.props.banks)
        // console.log('senders=',this.props.senders)
        console.log('id',this.props.match.params)
    }



formHandler = (event)=>{
    event.preventDefault();

        this.setState({loading:true})
        const formData = {}
        for(let formElementIdentifier in this.state.senderForm){
            formData[formElementIdentifier] = this.state.senderForm[formElementIdentifier].value
        }
        formData.user_id = this.props.user.id
         console.log('data = ',formData)
         this.props.onAddReceiver(formData)
         
         this.props.history.push('/receivers')

       // this.props.onNewSender(formData)
      
    
    }
    checkValidity(value, rules){
        let isValid = true
        if(!rules){
            return true
        }
        if(rules.required){
            isValid = value.trim() !=="" && isValid
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid
        }
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid

    }
    inputChangedHandler = (event,inputIdentifier)=>{
        const updatedsenderForm = {...this.state.senderForm}
        const updatedFormElement = {
            ...updatedsenderForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value,updatedFormElement.validation)
        updatedFormElement.touched = true
        updatedsenderForm[inputIdentifier] = updatedFormElement

        let formIsValid = true
        for(let inputIdentifier in updatedsenderForm){
            formIsValid = updatedsenderForm[inputIdentifier].valid && formIsValid
        }
        console.log(formIsValid)
        this.setState({senderForm:updatedsenderForm,formIsValid:formIsValid})
        //console.log(updatedFormElement)
    }
        render()
        {
            const formElementArray = []
            for (let key in this.state.senderForm){
                formElementArray.push({
                    id:key,
                    config:this.state.senderForm[key]
                })
            }
            let form = (

                            <form onSubmit =  {this.formHandler} disabled = {!this.state.formIsValid}>
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
                            
                            <Button btnType = 'Success' disabled = {!this.state.formIsValid} >Submit</Button>
                        </form>
            )

            form = this.props.loading?<Spinner/>:form
        
            
            return(
                <div className = {classes.ContactData}>
                    <div>
                        <h3 style ={{textAlign:'center'}}>NEW RECEIVER</h3><hr></hr>
                    </div>
                    {form}
                </div>
            )
        
        }
        
        
    }

    const mapStateToProps = state =>{
        return {
                user:state.user,
                banks:state.bank.banks,
                senders:state.sender.list
            
        }
    }
    const mapDispatchToProps  = dispatch => {
        return {
          
         onInitUser:()=>dispatch(actions.initUser()),
         onInitSender:(id)=>dispatch(actions.initSenders(id)),
         onInitBanks:()=>dispatch(actions.initBanks()),
         onAddReceiver:(data)=>dispatch(actions.createReceiver(data))
         
        }
    }

    

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(CreateReceiver,axios))
