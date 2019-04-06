import React, {Component} from 'react'
import ListUsers from '../../components/Users/ListUsers/ListUsers'
import User from '../../components/Users/User/User'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as action from '../../store/actions/index'
import {items} from './formParameter'
import {checkValidity} from '../../shared/utility'
import {connect} from 'react-redux'

class Users extends Component{
    state=items
    componentDidMount(){
        this.props.onInitUser()
        this.props.onInitReceivers(this.props.user.id,this.props.user.type)
        this.props.onInitUsers(this.props.user.id)
        this.props.onInitCurrencies();
    
    }

        userHandler = (event)=>{
            event.preventDefault();
        
                this.setState({loading:true})
                const formData = {}
                for(let formElementIdentifier in this.state.userForm){
                    formData[formElementIdentifier] = this.state.userForm[formElementIdentifier].value
                }
                const newuser = {
                    ...formData,
                    user_id:0
            }
            console.log('new user=',newuser)
        
            this.props.onAdduser(newuser)
            //this.props.history.push('/currencies')
            
            
            }

        inputChangedHandler = (event,inputIdentifier)=>{
            const updateduserForm = {...this.state.userForm}
            const updatedFormElement = {
                ...updateduserForm[inputIdentifier]
            }
            updatedFormElement.value = event.target.value
            updatedFormElement.valid = checkValidity(updatedFormElement.value,
                                        updatedFormElement.validation)
            updatedFormElement.touched = true
            updateduserForm[inputIdentifier] = updatedFormElement

            let formIsValid = true
            for(let inputIdentifier in updateduserForm){
                formIsValid = updateduserForm[inputIdentifier].valid && formIsValid
            }
            console.log(formIsValid)
            this.setState({userForm:updateduserForm,formIsValid:formIsValid})
            console.log(updatedFormElement)
        }
            activateForm = ()=>{
                this.setState({loading:!this.state.loading})
            }
 
    
    render(){
        let user = (
            <User title = {'Users'}
                        userHandler={this.userHandler}
                        user = {this.state}  
                        currencies={this.props.currencies}
                        inputChangedHandler = {this.inputChangedHandler} />);
            
        
        return(
             <div>
                    <button className="btn btn-primary"
                        onClick={this.activateForm} > New User</button>
                    
                    {this.state.loading?user:null}

                    <ListUsers listUsers = {this.props.users}
                            title = {'Users List'}/>
                    
             </div>      
                 
            
            
        )
    }   
}
const mapStateToProps = state =>{
    return{
        
        users:state.user.list,
        currencies:state.currency.active,
        user:state.user,
        receivers:state.receiver.list
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onInitUser:()=>dispatch(action.userType),
        onInitUsers:(id)=>dispatch(action.initUser(id)),
        onInitReceivers:(id,type)=>dispatch(action.initReceivers(id,type)),
        onInitCurrencies:()=>dispatch(action.initCurrencies())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Users,axios))




  