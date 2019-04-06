import React, { Component } from 'react';
import ListCurrencies from '../../components/Currencies/ListCurrencies/ListCurrencies'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'
import {items} from './formParameter'
import {checkValidity} from '../../components/Validation/Validations'
import Currency from '../../components/Currencies/Currency/Currency'


class Currencies extends Component {
        state = items;

      componentDidMount(){
        this.props.onInitCurrencies()
        }


        currencyHandler = (event)=>{
            event.preventDefault();
        
                this.setState({loading:true})
                const formData = {}
                for(let formElementIdentifier in this.state.currencyForm){
                    formData[formElementIdentifier] = this.state.currencyForm[formElementIdentifier].value
                }
                 const newcurrency = {
                    ...formData,
                    user_id:0
               }
               console.log('new currency=',newcurrency)
        
               this.props.onAddcurrency(newcurrency)
               //this.props.history.push('/currencies')
              
            
            }

        inputChangedHandler = (event,inputIdentifier)=>{
            const updatedcurrencyForm = {...this.state.currencyForm}
            const updatedFormElement = {
                ...updatedcurrencyForm[inputIdentifier]
            }
            updatedFormElement.value = event.target.value
            updatedFormElement.valid = checkValidity(updatedFormElement.value,updatedFormElement.validation)
            updatedFormElement.touched = true
            updatedcurrencyForm[inputIdentifier] = updatedFormElement

            let formIsValid = true
            for(let inputIdentifier in updatedcurrencyForm){
                formIsValid = updatedcurrencyForm[inputIdentifier].valid && formIsValid
            }
            console.log(formIsValid)
            this.setState({currencyForm:updatedcurrencyForm,formIsValid:formIsValid})
            console.log(updatedFormElement)
  }
    activateForm = ()=>{
        this.setState({loading:!this.state.loading})
    }
     
     render(){
         let currency = (
                        <Currency title = {'currencies'}
                        currencyHandler={this.currencyHandler}
                        currency = {this.state}  
                        list = {this.props.listAll} 
                        inputChangedHandler = {this.inputChangedHandler} />
                    );
       return(
            <div>
                 <button className="btn btn-primary" onClick={this.activateForm} >  New Currency</button> 
                {this.state.loading?currency:null}
               <ListCurrencies 
                    title = {'currencies'} 
                    active = {this.props.activeCurrencies} 
                     list = {this.props.listAll}/>   
            </div>
        )
    }
}

const mapStateToProps = state =>{
  return{
          activeCurrencies:state.currency.active,
          listAll:state.currency.list
  }
}
const mapDispatchToProps = dispatch =>{
  return{
      onInitCurrencies:()=>dispatch(actions.initCurrencies()),
      onAddcurrency:(formData)=>dispatch(actions.addCurrency(formData))
      
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Currencies,axios))

