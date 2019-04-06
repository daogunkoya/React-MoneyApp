import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'
export const userType ={
    type:actionTypes.User_Type
}

export const onInitCustomers = (id)=>{
    return {
        type:actionTypes.Get_Customers,
        id:id
    }
}

const setUser = (data)=>{
    return {
        type:actionTypes.GET_USER,
        result:data
    }
}

export const initUser = ()=>{
    return dispatch =>{
        axios('/users').then(response=>{
            dispatch(setUser(response.data))
        })
        .catch(err=>console.log(err))
        
    }
}