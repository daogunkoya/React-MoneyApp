import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

const setBanks = (banks)=>{
    return {
        type:actionTypes.FETCH_BANKS,
        result:banks
    }
}



const setAccounts = (accountBanks)=>{
    return {
        type:actionTypes.FETCH_ACCOUNT_BANKS,
        result:accountBanks
    }
}

const setPickup = (pickupBanks)=>{
    return {
        type:actionTypes.FETCH_PICKUP_BANKS,
        result:pickupBanks
    }
}

export const initBanks =()=>{
    return dispatch =>{
        axios.get('/banks').then(response=>{
            const pickup = response.data.filter(bank=>bank.status ==='p')
            const accounts = response.data.filter(bank=>bank.status ==='b')
            const banks = response.data

            dispatch( setBanks(banks))
            dispatch( setAccounts(accounts))
            dispatch( setPickup(pickup))
            
        })
    }
}
const setNewBank = newBankID =>{
    return {
        type:actionTypes.ADD_BANK,
        result:newBankID
    }
}

export const addBank = (bank,dispatch)=>{
    return dispatch =>{
        axios.post('/banks',bank).then(response=>{
            console.log('new bank added')
            dispatch(setNewBank(response.data))
        })
        .catch(err=>console.log('error found',err))
    }
}