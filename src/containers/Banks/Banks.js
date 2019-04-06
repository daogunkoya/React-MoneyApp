import React, {Component} from 'react'
import ListBanks from '../../components/Banks/ListBanks/ListBanks'
import Bank from '../../components/Banks/Bank/Bank'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as action from '../../store/actions/index'
import {items} from './formParameter'
import {checkValidity} from '../../shared/utility'
import {connect} from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'

class Banks extends Component{
    state=items
    componentDidMount(){
        this.props.onInitUser()
        this.props.onInitBank()
        this.props.onInitCurrencies();
    
    }

        bankHandler = (event)=>{
            event.preventDefault();
        
                this.setState({loading:true})
                const formData = {}
                for(let formElementIdentifier in this.state.bankForm){
                    formData[formElementIdentifier] = this.state.bankForm[formElementIdentifier].value
                }
                const newbank = {
                    ...formData,
                    user_id:0
            }
            console.log('new bank=',newbank)
        
            this.props.onAddbank(newbank)
            //this.props.history.push('/currencies')
            
            
            }

        inputChangedHandler = (event,inputIdentifier)=>{
            const updatedbankForm = {...this.state.bankForm}
            const updatedFormElement = {
                ...updatedbankForm[inputIdentifier]
            }
            updatedFormElement.value = event.target.value
            updatedFormElement.valid = checkValidity(updatedFormElement.value,
                                        updatedFormElement.validation)
            updatedFormElement.touched = true
            updatedbankForm[inputIdentifier] = updatedFormElement

            let formIsValid = true
            for(let inputIdentifier in updatedbankForm){
                formIsValid = updatedbankForm[inputIdentifier].valid && formIsValid
            }
            console.log(formIsValid)
            this.setState({bankForm:updatedbankForm,formIsValid:formIsValid})
            console.log(updatedFormElement)
        }
            activateForm = ()=>{
                this.setState({loading:!this.state.loading})
            }
 
    
    render(){
        let bank = 
            <Bank title = {'Banks'}
                        bankHandler={this.bankHandler}
                        bank = {this.state}  
                        currencies={this.props.currencies}
                        users={this.props.users}
                        inputChangedHandler = {this.inputChangedHandler} />;
            
        
        return(
             <div>
                <button className="btn btn-primary"
                        onClick={this.activateForm} > New Banks</button>
                    
                    {this.state.loading?bank:null}
                    <br/>
                    {this.props.banks?
                     <ListBanks banks = {this.props.banks}
                     title = {'Banks List'}/>:<Spinner/>
                    }
                   
             </div>      
                 
            
            
        )
    }   
}
const mapStateToProps = state =>{
    return{
        
        banks:state.bank.banks,
        currencies:state.currency.active,
        users:state.user.list,
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onInitUser:()=>dispatch(action.initUser()),
        onInitBank:()=>dispatch(action.initBanks()),
        onInitCurrencies:()=>dispatch(action.initCurrencies())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Banks,axios))



