import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'
//import axios from 'axios'

const setTodaysRate = (todaysrate)=>{
    return {
            type:actionTypes.FETCH_TODAYSRATE,
            todaysrate:todaysrate 
    }
}
export const initTodaysRate = dispatch =>{
    return dispatch => {
            //type:actionTypes.Rate
            axios.get('/todaysrate').then(response=>{
                    dispatch(setTodaysRate(response.data))
            })
            .catch(error=>{
                console.log(error)
            })
    }
}
    const setRate = result=>{
            return{
                type:actionTypes.ADD_RATE,
                value:result
            }
    }


export const createRate = newrates=>{
  return dispatch =>{
       console.log('reducer',newrates )
        axios.post('/rates',newrates).then(response=>{
            dispatch(setRate(response.data)) 
        })
        .catch(error=>{
            console.log(error)
        })
  }
}

const showRates = (rates)=>{
    return {
        type:actionTypes.FETCH_RATES,
        rates:rates
    }
}


export const initRates = ()=>{
    return dispatch =>{
        axios.get('/rates').then(response=>{
            dispatch(showRates(response.data))
        })
        .catch(error=>{
            console.log(error)
        })

        // let newrate = {
        //     rate:900,
        //     nigeria_uk:650,
        //     user_id:0
        // }
        
        // axios.post('/rates',newrate).then(response=>{
        //     dispatch(setRates([{id:1,rate:230,nigeria_uk:230,user_id:1},{id:2,rate:230,nigeria_uk:230,user_id:1}]))
        //     console.log('post response=',response)
        // })
        // .catch(error=>{
        //     console.log(error)
        // })
    }
}

