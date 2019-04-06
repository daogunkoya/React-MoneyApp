import React from 'react'
import Button from '../../UI/Button/Button'

const listRate = (props)=>(
    <div className = "col-md-8 col-md-2 bard bg-light">
        <h6>{props.title}</h6>
        <Button btnType = "Success" clicked ={props.link}>Create New Rate</Button>
        <table>
            <thead>
                <tr>
                        <th>No</th>
                        <th>Member</th>
                        <th>Rate</th>
                        <th>Bou</th>
                        <th>Sold</th> 
                        <th>Currency</th> 
                        <th>Actions</th> 
                        
                </tr>
            </thead>
            <tbody>
                {props.rates.map((listedRate,index)=>(
                    <tr key={index} >
                        <td>{index + 1}</td>
                        <td>{listedRate.user_id}</td>
                        <td><a>{listedRate.rate}</a></td>
                        <td><a>{listedRate.bou_rate}</a></td>
                        <td><a>{listedRate.sold_rate}</a></td>
                        <td><a>{listedRate.currency_id}</a></td>
                        <td>
                            <a href="{}" className="btn btn-info">Edits</a>
                             <a href="{}" className="btn btn-danger">Delete</a>
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
</div>
)

export default listRate