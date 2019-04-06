import React, {Component} from 'react'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import SideBar from '../../containers/SideBar/SideBar' 
import classes from './Layout.css'
import Aux from '../Auxi';

class Layout extends Component{
  render(){
    return(
      <Aux>
        <Toolbar />
        <SideDrawer/>
        <main className={classes.Layout}>
            <div className={classes.sidebar}>
              <SideBar/>
            </div>
            
            <div className = {classes.content}>
              {this.props.children}
            </div>
        </main>
      </Aux>
    )
  }
}

export default Layout
