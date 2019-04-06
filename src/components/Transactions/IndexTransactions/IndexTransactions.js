import React from 'react'
import classes from './IndexTransactions.css'
import {NavLink} from 'react-router-dom'

const indexTransactions = (props)=>(
    <div className = {classes.IndexTransactions}> 
        <h2> {props.title}</h2>
		<table className = "table table-striped">
			<thead>
					<tr>
							<th>No</th>
							<th>Sender</th>
							<th>Receiver</th>
							<th>Amount</th>
							<th>Commission</th>
							<th>Status</th>
							<th colSpan = "5"></th>
					</tr>
			</thead>
				<tbody>	
					{props.transactions.map((transaction,index)=>(
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{transaction.sender}</td>
								<td>{transaction.receiver}</td>
								<td>{transaction.amount}</td>
								<td>{transaction.commission}</td>
								<td>{transaction.status}</td>
								<td><NavLink to='/transactions/edit'>Edit</NavLink></td>
								<td><NavLink to='/transactions/delete'>Delete</NavLink></td>
								<td><NavLink to='/transactions/receipt'>Receipt</NavLink></td>	
							</tr>
					))}
				</tbody>
			</table>
    </div>
)

export default indexTransactions