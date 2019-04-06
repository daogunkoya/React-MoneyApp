import React from 'react'
import Button from '../Button/Button'
const table =(props)=>{

	return(
		<div>
			<h2>{props.title}</h2>
			<table class="table table-striped">
				<thead>
				<tr >
						<th>No</th>
						{
							props.headers.map(header =>(
									<th key = {header}>{header}</th>
						))}
						<td></td>
						<td></td>
				</tr>
				</thead>

				<tbody>
					{
								props.datas.map((data,index)=>(
									<tr key = {index}>
										<td>{index + 1}</td>
											{props.fields.map(field=>(
												<td key ={data[field]}> {data[field]} </td>
										))}
										<td ><Button btnType = "Danger" clicked ={props.delete}>Delete</Button></td>
										<td ><Button btnType = "Success" clicked ={props.modify}>Modify</Button></td>		
										
									</tr>
							))
						}
				</tbody>			
			</table>
		</div>
	)
  
}

export default table