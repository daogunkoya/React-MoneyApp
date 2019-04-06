import axios from '../../axios-orders'
import * as actionTypes from './actionTypes'

const setCommission = commissions =>{
    return{
        type:actionTypes.FETCH_COMMISSIONS,
        values:commissions
    }
}
export const initCommission = dispatch =>{
    return dispatch=>{
        axios.get('/commissions').then(response=>{
         
           dispatch (setCommission(response.data))
        })
        .catch(error=>{
            console.log(error)
        })
    }
}
const set_new_add = (data)=>{
    return {
        type:actionTypes.ADD_COMMISSION,
        value:data
    }
}

export const addCommission = (commission)=>{
    return dispatch =>{
        axios.post('/commissions',commission).then(response=>{
            console.log('new commission sent')
            set_new_add(response.data)
        })
        .catch(err=>console.log('error found',err))
    }
}

