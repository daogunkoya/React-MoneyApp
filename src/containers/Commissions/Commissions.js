import React, {Component} from 'react'
import ListCommissions from '../../components/Commissions/ListCommissions/ListCommissions'
import Commission from '../../components/Commissions/Commission/Commission'
import axios from '../../axios-orders'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as action from '../../store/actions/index'
import {items} from './formParameter'
import {checkValidity} from '../../shared/utility'
import {connect} from 'react-redux'

class Commissions extends Component{
    state=items
    componentDidMount(){
        this.props.onInitUser()
        this.props.onInitCommission()
        this.props.onInitCurrencies();
    
    }

        commissionHandler = (event)=>{
            event.preventDefault();
        
                this.setState({loading:true})
                const formData = {}
                for(let formElementIdentifier in this.state.commissionForm){
                    formData[formElementIdentifier] = this.state.commissionForm[formElementIdentifier].value
                }
                const newcommission = {
                    ...formData,
                    user_id:0
            }
            console.log('new commission=',newcommission)
        
            this.props.onAddcommission(newcommission)
            //this.props.history.push('/currencies')
            
            
            }

        inputChangedHandler = (event,inputIdentifier)=>{
            const updatedcommissionForm = {...this.state.commissionForm}
            const updatedFormElement = {
                ...updatedcommissionForm[inputIdentifier]
            }
            updatedFormElement.value = event.target.value
            updatedFormElement.valid = checkValidity(updatedFormElement.value,
                                        updatedFormElement.validation)
            updatedFormElement.touched = true
            updatedcommissionForm[inputIdentifier] = updatedFormElement

            let formIsValid = true
            for(let inputIdentifier in updatedcommissionForm){
                formIsValid = updatedcommissionForm[inputIdentifier].valid && formIsValid
            }
            console.log(formIsValid)
            this.setState({commissionForm:updatedcommissionForm,formIsValid:formIsValid})
            console.log(updatedFormElement)
        }
            activateForm = ()=>{
                this.setState({loading:!this.state.loading})
            }
 
    
    render(){
        let commission = (
            <Commission title = {'Commissions'}
                        commissionHandler={this.commissionHandler}
                        commission = {this.state}  
                        currencies={this.props.currencies}
                        users={this.props.users}
                        inputChangedHandler = {this.inputChangedHandler} />);
            
        
        return(
             <div>
                <button className="btn btn-primary"
                        onClick={this.activateForm} > New Commissions</button>
                    
                    {this.state.loading?commission:null}
                    <br/>
                    <ListCommissions commissions = {this.props.commissions}
                            title = {'Commissions List'}/>
             </div>      
                 
            
            
        )
    }   
}
const mapStateToProps = state =>{
    return{
        
        commissions:state.commission.list,
        currencies:state.currency.active,
        users:state.user.list,
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onInitUser:()=>dispatch(action.initUser()),
        onInitCommission:()=>dispatch(action.initCommission()),
        onInitCurrencies:()=>dispatch(action.initCurrencies())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Commissions,axios))

