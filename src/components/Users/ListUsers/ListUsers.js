import React from 'react'
import classes from './ListUsers.css'
import {NavLink} from 'react-router-dom'
import Button from '../../UI/Button/Button'

const listUsers = (props)=>
	{
		const users = props.listUsers?
					(props.listUsers.map((user,index)=>(
						<tr key={index}>
							<td>{index + 1}</td>
							<td><a>{user.name}</a></td>
							<td>{user.mobile}</td>
							<td><NavLink to={user.id + '/create/receiver'}>New Receiver</NavLink></td>
							
							<td><NavLink to={"users/"+ user.id + "/receivers"}>[ 3 ]</NavLink></td>
							<td>
								<a NavLink to="user/edit" className="btn btn-primary">
									Edit
								</a>
								<a NavLink to="user/edit" className="btn btn-danger">
									Delete
								</a>
							</td>
						</tr>
					))
				):null;

		return(
    <div className = {[classes.ListUsers,'col-md-10'].join(' ')}>
        <h6 style = {{textAlign:'center',textTransform:'uppercase'}}>{props.title}</h6>
		<NavLink to="/users/create"><Button btnType = "Success" >New User</Button></NavLink>
			<table>
				<thead>
					<tr>
							<th>No</th>
							<th>Name</th>
							<th>Mobile</th>
							<th>Create</th>
							<th>Receivers</th>
							<th colSpan="3"></th>
					</tr>
				</thead>
				<tbody>{users}</tbody>
			</table>
    </div>
	)
}

export default listUsers