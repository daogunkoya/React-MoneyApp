import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'
export const  AgentTransactions = (agentId)=>
{
    return {
        type:actionTypes.Agent_Transactions,
        id:agentId
    }
}

 const set_fetched_transactions = result =>{
    return {
        type:actionTypes.FETCH_TRANSACTIONS,
        values:result
    }
}

export const initTransactions = (id = null,dispatch)=>{
        return dispactch =>{
            let transactions = id?id +'/transactions':'/transactions'
            axios.get(transactions).then(response =>{
                dispactch(set_fetched_transactions(response.data))
            })
            .catch(error=>{
                console.log(error)
            })
        }
}


