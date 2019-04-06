import React, {Component} from 'react'
import IndexTransaction from '../../components/Transactions/IndexTransactions/IndexTransactions'
import axios from '../../axios-orders'
import {connect} from 'react-redux'
import withErrorsHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'

class Transactions extends Component{
    componentDidMount(){
        this.props.onInitUser()
        this.props.onInitTransactions(this.props.user.id)
    }
    render(){
        return(
                <div>
                    <IndexTransaction title = {'Transactions'} transactions = {this.props.transactions}/>
                </div>
        )
    }
}
const mapStateToProps = state=>{
    return{
        transactions:state.transactions.transactions,
        user:state.user
    }
}
const mapDispatchToProps = dispatch=>{
    return {
onInitUser:()=>dispatch(actions.userType),
onInitTransactions:(id)=>dispatch(actions.initTransactions(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorsHandler(Transactions,axios))