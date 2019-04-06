import React, {Component} from 'react'
import IndexReceivers from '../../components/Receivers/IndexReceivers/IndexReceivers'
import Receiver from '../../components/Receivers/Receiver/Receiver'
import axios from '../../axios-orders'
//import {Switch,Route} from 'react-router-dom'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as action from '../../store/actions/index'
import {items} from './formParameters'
import {checkValidity} from '../../shared/utility'
import {connect} from 'react-redux'

class Receivers extends Component{
    state=items
    componentDidMount(){
        this.props.onInitUser()
        this.props.onInitReceivers()
        this.props.onInitSenders()
        this.props.oninitBanks();
        
    }

        receiverHandler = (event)=>{
            event.preventDefault();
        
                this.setState({loading:true})
                const formData = {}
                for(let formElementIdentifier in this.state.receiverForm){
                    formData[formElementIdentifier] = this.state.receiverForm[formElementIdentifier].value
                }
                const newreceiver = {
                    ...formData,
                    user_id:0
            }
            console.log('new receiver=',newreceiver)
        
            this.props.onAddreceiver(newreceiver)
            //this.props.history.push('/currencies')
            
            
            }

        inputChangedHandler = (event,inputIdentifier)=>{
            const updatedreceiverForm = {...this.state.receiverForm}
            const updatedFormElement = {
                ...updatedreceiverForm[inputIdentifier]
            }
            updatedFormElement.value = event.target.value
            updatedFormElement.valid = checkValidity(updatedFormElement.value,
                                        updatedFormElement.validation)
            updatedFormElement.touched = true
            updatedreceiverForm[inputIdentifier] = updatedFormElement

            let formIsValid = true
            for(let inputIdentifier in updatedreceiverForm){
                formIsValid = updatedreceiverForm[inputIdentifier].valid && formIsValid
            }
            console.log(formIsValid)
            this.setState({receiverForm:updatedreceiverForm,formIsValid:formIsValid})
            console.log(updatedFormElement)
        }
            activateForm = ()=>{
                this.setState({loading:!this.state.loading})
            }
 
    
    render(){
        let receiver = (
            <Receiver title = {'Receivers'}
                receiverHandler={this.receiverHandler}
                senders = {this.props.senders}  
                receiver = {this.state}
                banks = {this.props.banks} 
                inputChangedHandler = {this.inputChangedHandler} />
        );
        
        return(
        <div>
            <button className="btn btn-primary" onClick={this.activateForm} > New Currency</button>
             {this.state.loading?receiver:null}
             <IndexReceivers receivers = {this.props.receivers} title = {'Receivers List'}/>
            
          </div>      
                 
            
            
        )
    }   
}
const mapStateToProps = state =>{
    return{
        
        receivers:state.receiver.list,
        user:state.user,
        senders:state.sender.list,
        banks:state.bank.banks
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onInitUser:()=>dispatch(action.userType),
        onInitReceivers:()=>dispatch(action.initReceivers()),
        onInitSenders:()=>dispatch(action.initSenders(1)),
        oninitBanks:()=>dispatch(action.initBanks())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Receivers,axios))




  