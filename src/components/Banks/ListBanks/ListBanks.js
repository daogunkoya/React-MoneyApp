import React from 'react'
const listBanks = (props)=>(
                <div className="col-md-9 card bg-light">
                        <h6>{props.title}</h6>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                        <th>No</th>
                                        <th>Banks</th>
                                        <th>Types</th>
                                        <th>Actions</th> 
                                         
                                        
                                </tr>
                            </thead>
                            <tbody>
                                {props.banks.map((bank,index)=>(
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td><a>{bank.name}</a></td>
                                        <td><a>{bank.status}</a></td>
                                        <td><a className="btn btn-primary">Edit</a></td>
                                        <td><a className="btn btn-danger">Delete</a></td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
        </div>
    )
                

export default listBanks