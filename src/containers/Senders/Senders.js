import React, {Component} from 'react'
import ListSenders from '../../components/Senders/ListSenders/ListSenders'
import Sender from '../../components/Senders/Sender/Sender'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as action from '../../store/actions/index'
import {items} from './formParameter'
import {checkValidity} from '../../shared/utility'
import {connect} from 'react-redux'

class Senders extends Component{
    state=items
    componentDidMount(){
        this.props.onInitUser()
        this.props.onInitReceivers(this.props.user.id,this.props.user.type)
        this.props.onInitSenders(this.props.user.id)
        this.props.onInitCurrencies();
    
    }

        senderHandler = (event)=>{
            event.preventDefault();
        
                this.setState({loading:true})
                const formData = {}
                for(let formElementIdentifier in this.state.senderForm){
                    formData[formElementIdentifier] = this.state.senderForm[formElementIdentifier].value
                }
                const newsender = {
                    ...formData,
                    user_id:0
            }
            console.log('new sender=',newsender)
        
            this.props.onAddsender(newsender)
            //this.props.history.push('/currencies')
            
            
            }

        inputChangedHandler = (event,inputIdentifier)=>{
            const updatedsenderForm = {...this.state.senderForm}
            const updatedFormElement = {
                ...updatedsenderForm[inputIdentifier]
            }
            updatedFormElement.value = event.target.value
            updatedFormElement.valid = checkValidity(updatedFormElement.value,
                                        updatedFormElement.validation)
            updatedFormElement.touched = true
            updatedsenderForm[inputIdentifier] = updatedFormElement

            let formIsValid = true
            for(let inputIdentifier in updatedsenderForm){
                formIsValid = updatedsenderForm[inputIdentifier].valid && formIsValid
            }
            console.log(formIsValid)
            this.setState({senderForm:updatedsenderForm,formIsValid:formIsValid})
            console.log(updatedFormElement)
        }
            activateForm = ()=>{
                this.setState({loading:!this.state.loading})
            }
 
    
    render(){
        let sender = (
            <Sender title = {'Senders'}
                        senderHandler={this.senderHandler}
                        sender = {this.state}  
                        currencies={this.props.currencies}
                        inputChangedHandler = {this.inputChangedHandler} />);
            
        
        return(
             <div>
                    <button className="btn btn-primary"
                        onClick={this.activateForm} > New Sender</button>
                    
                    {this.state.loading?sender:null}

                    <ListSenders listSenders = {this.props.senders}
                            title = {'Senders List'}/>
                    
             </div>      
                 
            
            
        )
    }   
}
const mapStateToProps = state =>{
    return{
        
        senders:state.sender.list,
        currencies:state.currency.active,
        user:state.user,
        receivers:state.receiver.list
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onInitUser:()=>dispatch(action.userType),
        onInitSenders:(id)=>dispatch(action.initSenders(id)),
        onInitReceivers:(id,type)=>dispatch(action.initReceivers(id,type)),
        onInitCurrencies:()=>dispatch(action.initCurrencies())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Senders,axios))

