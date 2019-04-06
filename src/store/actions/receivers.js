
import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'


const set_receivers = (receivers)=>{
    return {
        type:actionTypes.FETCH_RECEIVERS,
        values:receivers
    }
}

export const initReceivers = (id = null, type =null)=>{
    return dispatch=>{
        let link = id === null?'/receivers':'/'+ id + '/' + type + '/receivers'
        axios.get(link).then(response=>{
            dispatch(set_receivers(response.data))
        })
        .catch(error=>{
            console.log(error)
        })
    }
}

const addedReceiver = (data)=>{
    return {
        type:actionTypes.ADD_RECEIVER,
        value:data
    }
}

export const createReceiver = (new_receiver)=>{
    return dispatch =>{
        axios.post('/receivers',new_receiver).then(response=>{
            console.log('successfully sent')
            addedReceiver(response.data)
        })
        .catch(err=>console.log('error found =',err))
    }
}

