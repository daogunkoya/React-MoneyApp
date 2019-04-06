import React, {Component} from 'react'
import ListRates from '../../components/Rates/ListRate/ListRate'
import Rate from '../../components/Rates/Rate/Rate'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as action from '../../store/actions/index'
import {items} from './formParameter'
import {checkValidity} from '../../shared/utility'
import {connect} from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'

class Rates extends Component{
    state=items
    componentDidMount(){
        this.props.onInitUser()
        this.props.onInitRate()
        this.props.onInitCurrencies();
    
    }

        rateHandler = (event)=>{
            event.preventDefault();
        
                this.setState({loading:true})
                const formData = {}
                for(let formElementIdentifier in this.state.rateForm){
                    formData[formElementIdentifier] = this.state.rateForm[formElementIdentifier].value
                }
                const newrate = {
                    ...formData,
                    user_id:0
            }
            console.log('new rate=',newrate)
        
            this.props.onAddrate(newrate)
            //this.props.history.push('/currencies')
            
            
            }

        inputChangedHandler = (event,inputIdentifier)=>{
            const updatedrateForm = {...this.state.rateForm}
            const updatedFormElement = {
                ...updatedrateForm[inputIdentifier]
            }
            updatedFormElement.value = event.target.value
            updatedFormElement.valid = checkValidity(updatedFormElement.value,
                                        updatedFormElement.validation)
            updatedFormElement.touched = true
            updatedrateForm[inputIdentifier] = updatedFormElement

            let formIsValid = true
            for(let inputIdentifier in updatedrateForm){
                formIsValid = updatedrateForm[inputIdentifier].valid && formIsValid
            }
            console.log(formIsValid)
            this.setState({rateForm:updatedrateForm,formIsValid:formIsValid})
            console.log(updatedFormElement)
        }
            activateForm = ()=>{
                this.setState({loading:!this.state.loading})
            }
 
    
    render(){
        let rate = (
            <Rate title = {'Rates'}
                        rateHandler={this.rateHandler}
                        rate = {this.state}  
                        currencies={this.props.currencies}
                        users={this.props.users}
                        inputChangedHandler = {this.inputChangedHandler} />);
            
        
        return(
             <div>
                <button className="btn btn-primary"
                        onClick={this.activateForm} > New Rates</button>
                    
                    {this.state.loading?rate:null}
                    <br/>
                    {this.props.rates?
                         <ListRates rates = {this.props.rates}
                                title = {'Rates List'}/>:
                        <Spinner/>
                    }  
                    
             </div>      
                 
            
            
        )
    }   
}
const mapStateToProps = state =>{
    return{
        
        rates:state.rate.rates,
        currencies:state.currency.active,
        users:state.user.list,
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onInitUser:()=>dispatch(action.initUser()),
        onInitRate:()=>dispatch(action.initRates()),
        onInitCurrencies:()=>dispatch(action.initCurrencies())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Rates,axios))
