import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'
const navigationItems = (props)=>{
    return(
        <ul className = {[classes.NavigationItems,'nav navbar-nav'].join(' ')}>
            {Object.keys(props.navItems)
            .map((nav,index)=>{
                let isActive = index===0?['active', 'exact']:null
           
                return  <NavigationItem 
                        key = {index} 
                        link = {props.navItems[nav]} {...isActive}> {nav}  </NavigationItem>
            })}     
        </ul>
      )
           
        

            
      
      
}

export default navigationItems

