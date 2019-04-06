import React from 'react'
import {Link} from 'react-router-dom'
const listCurrencies = (props)=>(
                <div>
                        <h6>{props.title}</h6>
                        <table>
                            <thead>
                                <tr>
                                        <th>No</th>
                                        <th>Code</th>
                                        <th>Origin</th>
                                        <th>Origin Symbol</th> 
                                        <th>Destination</th> 
                                        <th>Destination Symbol</th>
                                        <th>Income Type</th> 
                                        <th colSpan={2}>Action</th> 
                                        
                                </tr>
                            </thead>
                            <tbody>
                                {props.active.map((currency,index)=>(
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{currency.code}</td>
                                        <td>{currency.origin}</td>
                                        <td>{currency.origin_symbol}</td>
                                        <td>{currency.destination}</td>
                                        <td>{currency.destination_symbol}</td>
                                        <td>{currency.income_category}</td>
                                        <td><Link to={'/currencies/edit/'+currency.id}
                                           
                                        className="btn btn-primary"
                                        >Edit</Link></td>
                                        <td><a href="/delete" className="btn btn-danger">Delete</a></td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
        </div>
    )
                

export default listCurrencies