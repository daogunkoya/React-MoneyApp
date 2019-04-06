import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'
export const  AgentCustomers = (agentId)=>
{
    return {
        type:actionTypes.Agent_Customers,
        id:agentId
    }
}



const customerAdded = (response)=>{
    return {
            type:actionTypes.ADD_SENDER,
            result:response
    }
}
export const onAddSender = (customer,dispatch)=>{
    return dispatch =>{
        axios.post('/senders',customer).then(response=>{
            dispatch(customerAdded(response))
        })
    }
}
const setSenders = (senders)=>{
    return {
        type:actionTypes.Get_Senders,
        value:senders

    }
}

// const setSendersMenu = (senders,customer = null)=>{
  
//     let  senderOption = null 
//         senderOption = senders.map(sender=>(
//             {value: sender.id, displayValue:sender.name.toUpperCase()}
//             ))
    
//         if(customer){
//             senderOption = null
//                 senderOption = [{
//                     value: customer.id,
//                     displayValue:customer.name.toUpperCase()
//                 }]                     
//         }    
//             console.log('customer=',senderOption)
           
//             return  {
//                 type:actionTypes.Show_Senders_Menu,
//                 menu:senderOption
//                 }
        

//     }

export const initSenders = (id = null ,customerOnly = null, dispatch)=>{
    return dispatch => {
        //type:actionTypes.Rate
       let senders = id?id+'/senders':'/senders'
        axios.get(senders).then(response=>{ 
           //dispatch(setSendersMenu(response.data,customerOnly)) 
            dispatch(setSenders(response.data)) //for menu list
            
        })
        .catch(error=>{
            console.log(error)
        })
    }
}



