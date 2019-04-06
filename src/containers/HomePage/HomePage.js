import React,{Component} from 'react'
import axios from '../../axios-orders'
import {connect} from 'react-redux'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import classes from './HomePage.css'
import Banner from '../../components/UI/Banner/Banner'
import IndexTransactions from '../../components/Transactions/IndexTransactions/IndexTransactions'
import ListSenders from '../../components/Senders/ListSenders/ListSenders'
import * as actions from '../../store/actions/index'

class HomePage extends Component{
  componentDidMount(){
    this.props.onInitUser()
    this.props.oninitSender(this.props.user.id)
  }
    render(){
      return(
        <div>
          <div className = {classes.HomePage}>
              <Banner/>
              <IndexTransactions title={'Latest Transactions'} transactions = {this.props.transaction}/>
              <ListSenders senders = {this.props.senders} title = {'Latest Customers'}/>
          </div>

        </div>
      )
    }
}

const mapStateToProps = state=>{
  return{
      user:state.user,
      transaction:state.transactions.transactions,
      senders:state.sender.list,
      rate:state.rate.rate
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    onInitUser:()=>dispatch(actions.initUser()),
    oninitSender:(id)=>dispatch(actions.initSenders(id))

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(HomePage,axios));
