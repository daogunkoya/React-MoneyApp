import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import IndexRate from '../../components/Rate/IndexRate/IndexRate'
import CreateRate from './CreateRate/CreateRate'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'
import axios from '../../axios-orders'

class Rate extends Component{
   
    componentDidMount(){
        this.props.onInitRate()
        
    }

     linkToNew = ()=>{
        this.props.history.push('/rate/create')
    }
    render(){
        
        return(
           
            <Switch>
             <Route path= '/rate' exact 
                    render={()=>(<IndexRate rates = {this.props.rates} title = {'Rates Till Date'} link={this.linkToNew}/>)}/>
            <Route path= '/rate/create' exact 
                    render={()=>(<CreateRate  title = {'Create Rate'}/>)}/>
            
        </Switch>
        )
    }
}

const mapStateProps = state =>{
    return {
        rates:state.rate.rates
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onInitRate:()=>dispatch(actions.initRates())
        
        
    }
}

export default connect(mapStateProps,mapDispatchToProps)(Rate,axios)
