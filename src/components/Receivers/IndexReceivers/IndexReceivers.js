import React from 'react'
import Button from '../../UI/Button/Button'
import {NavLink} from 'react-router-dom'
const indexReceivers = (props)=>(
                <div className= {"col-md-12 card bg-light"}>
                        <h2 style = {{textAlign:'center'}}>Receiver List</h2>
                        <Button btnType = "Success">
                            <NavLink to={ '/create/receiver'}>New Receiver </NavLink></Button>
                        <table>
                            <thead>
                                <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Modify</th> 
                                        <th>Delete</th> 
                                        <th>Action</th> 
                                        
                                </tr>
                            </thead>
                            <tbody>
                                {props.receivers.map((receiver,index)=>(
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td><a>{receiver.fname.toUpperCase()} {receiver.lname.toUpperCase()}</a></td>
                                        <td><button>Modify</button></td>
                                        <td><button>Delete</button></td>
                                        <td><button>Send</button></td>
                                        
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
        </div>
    )
                

export default indexReceivers