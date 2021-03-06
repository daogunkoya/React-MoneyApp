import React from 'react'
const listCommissions = (props)=>(
                <div className="col-md-9 card bg-light">
                        <h6>{props.title}</h6>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                        <th>No</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Commission</th> 
                                        <th>Commission Ratios, Business%,Agent%</th> 
                                        
                                </tr>
                            </thead>
                            <tbody>
                                {props.commissions.map((commission,index)=>(
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td><a>{commission.start_from}</a></td>
                                        <td><a>{commission.end_at}</a></td>
                                        <td><a>{commission.value}</a></td>
                                        <td><a>{100 -parseFloat(commission.agent_quota)},{commission.agent_quota}</a></td>
                                        <td>Delete</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
        </div>
    )
                

export default listCommissions