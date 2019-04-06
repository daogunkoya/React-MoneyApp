import React from 'react'
import classes from './ListSenders.css'
import {NavLink} from 'react-router-dom'
import Button from '../../UI/Button/Button'

const listSenders = (props)=>
	{
		const senders = props.listSenders?
					(props.listSenders.map((sender,index)=>(
						<tr key={index}>
							<td>{index + 1}</td>
							<td><a>{sender.name.toUpperCase()}</a></td>
							<td>{sender.mobile}</td>
							<td><NavLink to={sender.id + '/create/receiver'}>New Receiver</NavLink></td>
							<td><NavLink to="sender/edit">Edit</NavLink></td>
							<td><NavLink to={"senders/"+ sender.id + "/receivers"}>Receiver:3</NavLink></td>
							<td><NavLink to="sender/send">Send</NavLink></td>
						</tr>
					))
				):null;

		return(
    <div className = {[classes.ListSenders,'col-md-10','card bg-light'].join(' ')}>
        <h6 style = {{textAlign:'center',textTransform:'uppercase'}}>{props.title}</h6>
		<NavLink to="/senders/create"><Button btnType = "Success" >New Sender</Button></NavLink>
			<table className="table table-striped">
				<thead>
					<tr>
							<th>No</th>
							<th>Name</th>
							<th>Mobile</th>
							<th>Create</th>
							<th>Modify</th>
							<th>receivers</th>
							<th>Send Money</th>
					</tr>
				</thead>
				<tbody>{senders}</tbody>
			</table>
    </div>
	)
}

export default listSenders