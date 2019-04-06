import React,{Component} from 'react'
import * as actions from '../../../store/actions/index'
import Receivers from '../../../components/Receivers/IndexReceivers/IndexReceivers'
import {connect} from 'react-redux'
import axios from '../../../axios-orders'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'

class IndexReceivers extends Component{
    componentDidMount(){
        console.log(this.props)
        this.props.onInitUserType()
        this.props.onInitReceivers(this.props.match.params.id,this.props.user.type)
    }
    render(){
        return (<Receivers receivers = {this.props.receivers}/>)
    }
}

const mapStateToProps = state =>{
    return {
        receivers:state.receiver.list,
        user:state.user
        
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onInitReceivers:(id,type)=>dispatch(actions.initReceivers(id,type)),
        onInitUserType:()=>dispatch(actions.userType)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(IndexReceivers,axios))