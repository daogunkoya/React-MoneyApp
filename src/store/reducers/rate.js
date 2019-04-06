import * as actionTypes from '../actions/actionTypes'
const initialState = {
    todaysrate:230,
    nigeria_uk:300,
    rates:[],
    id:null
}
  


const rate = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_TODAYSRATE:
            return {
                ...state,
                todaysrate:action.todaysrate.rate,
                nigeria_uk:action.todaysrate.nigeria_uk,
            }
            case actionTypes.FETCH_RATES:
                return {
                    ...state,
                    rates:action.rates
                }
                case actionTypes.ADD_RATE:
                console.log('response id=',action.value)
                return{
                    ...action.value,
                    id:action.value.id
                }
        default:
            return state

    }
}

export default rate

