import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import Logo from '../../UI/Logo/Logo'
import classes from './Toolbar.css'

const toolbar = (props)=>{
    const navList = {
                      Home:'/home',
                      Customers:'/customers',
                      Transactions:'/transactions',
                      Account:'/user',
                      Login:'/login'

                    }
    return(
      <header className = {[classes.Toolbar,'navbar navbar-expand-lg navbar-light bg-primary'].join('')}>
          <Logo/>
          <DrawerToggle/>
          <nav>
            <NavigationItems navItems = {navList}/>
          </nav>
      </header>
      )
}

export default toolbar
