import axios from '../../axios-orders'
import * as actionTypes from './actionTypes'

const setCurrencies = currencies =>{
    return{
        type:actionTypes.FETCH_CURRENCIES,
        values:currencies
    }
}
 const activeCurrencies = currencies =>{
    return{
        type:actionTypes.ACTIVE_CURRENCY,
        values:currencies
    }
}
export const initCurrencies = dispatch =>{
    return dispatch=>{
        axios.get('/currencies').then(response=>{
         const active = response.data.filter(currency=>currency.status === 1)
            
            dispatch (setCurrencies(response.data))
           dispatch (activeCurrencies(active))
           
        })
        .catch(error=>{
            console.log(error)
        })
    }
}
const newCurrency = (data)=>{
    return {
        type:actionTypes.ADD_CURRENCY,
        value:data
    }
}

export const addCurrency = (currency)=>{
    console.log('at action',currency)
    return dispatch =>{
        axios.post('/currencies',currency).then(response=>{
            console.log('new currency sent',currency)
            newCurrency(response.data)
        })
        .catch(err=>console.log('error found',err))
    }
}

