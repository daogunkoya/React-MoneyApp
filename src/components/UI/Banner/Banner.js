import React from 'react'
import classes from './Banner.css'

const banner = () =>(
    <div className={classes.Banner}>
            <h2 className = {classes.h2}> How It Work</h2>
            <div className={classes.flow}>
                <span className={classes.flowItem}><a href="sendersReceivers.php" > Create New Sender</a></span>&#9658;
                <span className={classes.flowItem}><a href="sendersReceivers.php" > Create Receiver</a></span>&#9658;
                <span className={classes.flowItem}> <a href="sendMoney.php" >Send Money</a></span>
            </div>
            <div className={classes.diagram}>        
                    <span className="fa-stack fa-4x">
                    <i className="fa fa-square-o fa-stack-2x"></i>
                    <i className="fa fa-user fa-stack-1x"></i>
                    </span>
                
            </div>
</div>
)

export default banner