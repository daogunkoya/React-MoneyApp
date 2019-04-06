import React,{Component} from 'react'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index'
import {connect} from 'react-redux'
import classes from './CreateTransaction.css'
import {items} from './formParameter'
import {checkValidity} from '../../../components/Validation/Validations'

class CreateTransaction extends Component{
    state = items
    customerOption = customer =>[{value: customer.id,displayValue:customer.name.toUpperCase()}] 
    sendersOption = senders =>senders.map(sender=>({value: sender.id,displayValue:sender.name.toUpperCase()}))

    componentDidMount(){
        this.props.onInitUser()

         let senders = this.customerOption(this.props.user)                        //initialise senders
        if(this.props.user.type==='agent'){
            this.props.onInitSenders(this.props.userId)
            senders = this.sendersOption(this.props.senders)  
        }
        console.log('senders menu=',this.props.senders)
        this.props.onInitReceivers(this.props.userId,this.props.user.type)             //initilise receivers
        console.log('receivers menu=',this.props.receivers)

        const updatedTransactionForm = {...this.state.transactionForm}
        updatedTransactionForm['sender'].elementConfig.options = senders
        this.setState({transactionForm:updatedTransactionForm})
    }
   
    commissionHandler = (event)=>{
        event.preventDefault();
    
            this.setState({loading:true})
            const formData = {}
            for(let formElementIdentifier in this.state.transactionForm){
                formData[formElementIdentifier] = this.state.transactionForm[formElementIdentifier].value
            }
             const newCommission = {
                ...formData,
                user_id:0
           }
           console.log('new commission=',newCommission)
    
           this.props.onAddCommission(newCommission)
           this.props.history.push('/commissions')
          
        
        }
        
        inputChangedHandler = (event,inputIdentifier)=>{
            const updatedtransactionForm = {...this.state.transactionForm}
            const updatedFormElement = {
                ...updatedtransactionForm[inputIdentifier]
            }
            updatedFormElement.value = event.target.value
            updatedFormElement.valid = checkValidity(updatedFormElement.value,updatedFormElement.validation)
            updatedFormElement.touched = true
            updatedtransactionForm[inputIdentifier] = updatedFormElement
    
            let formIsValid = true
            for(let inputIdentifier in updatedtransactionForm){
                formIsValid = updatedtransactionForm[inputIdentifier].valid && formIsValid
            }
            console.log(formIsValid)
            this.setState({transactionForm:updatedtransactionForm,formIsValid:formIsValid})
            //console.log(updatedFormElement)
        }
    render(){
        const formElementArray = []
        for (let key in this.state.transactionForm){
            formElementArray.push({
                id:key,
                config:this.state.transactionForm[key]
            })
        }
    //receivers 
        const formReceiverArray = []
        for (let key in this.state.receiverForm){
            formReceiverArray.push({
                id:key + 1,
                config:this.state.receiverForm[key]
            })
        }
        const form = (
                                    
                    <form onSubmit =  {this.commissionHandler} disabled = {!this.state.formIsValid}>
                       <div className = {classes.CreateTransaction} >  
                             <div className={classes.col6}>
                                    { formElementArray.map(formElement =>{ 
                                        return  (<div  key = {formElement.id} >
                                                    <label>{formElement.config.elementConfig.label}</label>
                                                    <Input
                                                       
                                                        elementType = {formElement.config.elementType}
                                                        elementConfig = {formElement.config.elementConfig}
                                                        value = {formElement.config.value}
                                                        shouldValidate = {formElement.config.validation}
                                                        invalid = {!formElement.config.valid}
                                                        touched = {formElement.config.touched}
                                                        changed = {(event) =>this.inputChangedHandler(event,formElement.id)}/>
                                                    </div>)                 
                                    })}
                                </div>
                                <div className = {classes.col6}>
                                    { formReceiverArray.map(formElement =>{ 
                                            return  (
                                                    <div key = {formElement.id} >
                                                        <label>{formElement.config.elementConfig.label}</label>
                                                        <Input
                                                            
                                                            elementType = {formElement.config.elementType}
                                                            elementConfig = {formElement.config.elementConfig}
                                                            value = {formElement.config.value}
                                                            shouldValidate = {formElement.config.validation}
                                                            invalid = {!formElement.config.valid}
                                                            touched = {formElement.config.touched}
                                                            changed = {(event) =>this.inputChangedHandler(event,formElement.id)}/>
                                                        </div>
                                                    )              
                                        })
                                }
                                </div>
                    </div>
                    <Button btnType = 'Success' disabled = {!this.state.formIsValid} >Send Money</Button>
                </form>
            
    )

        return(
            <section>
                <h3>Send Money</h3>
                 {form} 
            </section>
        )
    }
}

const mapStateToProps = state =>{
    return{
            userId:state.user.id,
            user:state.user,
            senders:state.sender.list,
            receivers:state.sender.receivers,

    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onInitUser:()=>dispatch(actions.initUser()),
        onInitSenders:(id)=>dispatch(actions.initSenders(id)),
        onInitReceivers:(id,type)=>dispatch(actions.initReceivers(id,type))
        
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(CreateTransaction,axios))
