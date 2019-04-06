import React,{Component} from 'react'
import classes from './SideBar.css'
import TodaysRate from '../../components/Rate/TodaysRate'
import {connect} from 'react-redux'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import ListItem from '../../components/Navigation/ListItem/ListItem'
import * as actions from '../../store/actions/index'


    class SideBar extends Component{
        componentDidMount(){
            this.props.onInitUser()
            this.props.onInitTodaysRate()
        }
            render(){
                const linkItems = {
                    Home:'/home',
                    Members: '/users',
                    Senders:'/senders',
                    Receivers:'/receivers',
                    Currency:'/currencies',
                    Transactions:'/transactions',
                    Rate:'/rates',
                    Banks:'/banks',
                    Commission:'/commissions',



                  }
                return (
                    <div className = {[classes.SideBar,'sidebar panel panel-primary'].join(' ')}>
                        <ul className = {['panel panel-body'].join(' ')}>
                            <li className ={classes.active} style ={{textAlign:'center'}}>Account Type: {this.props.user.type.toUpperCase()}</li>
                            <li><strong>Welcome {this.props.user.name.toUpperCase()}!</strong></li>
                        </ul>
                        <TodaysRate todaysrate = {this.props.todaysrate}/>
                        
                        {Object.keys(linkItems)
                                    .map((nav,index)=>{
                             let isActive = index===0?['active', 'exact']:null
           
                            return  <ListItem 
                                            key = {index} 
                                            link = {linkItems[nav]} 
                                            {...isActive}> {nav}  </ListItem>
                                    })}
                    </div>
                )
            }
    }
           

//export default sideBar
const mapStateToProps = state=>{
    return{
        user:state.user.active,
        todaysrate:state.rate.todaysrate
    }
  }
  
  const mapDispatchToProps = dispatch=>{
    return {
        onInitUser:()=>dispatch(actions.initUser()),
        onInitTodaysRate:()=>dispatch(actions.initTodaysRate())
        
        
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(SideBar,axios));