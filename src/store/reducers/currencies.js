import * as actionTypes from '../actions/actionTypes'
const initialState = {
    list:[],
    active:[],
    id:null
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_CURRENCIES:
            return{
                ...state,
                list:action.values
            }
        case actionTypes.ACTIVE_CURRENCY:
           
            return{
                ...state,
                active:action.values
            }
        case actionTypes.ADD_CURRENCY:
        return{
            ...state,
            id:action.value
        }
        default:
            return state
    }
}

export default reducer