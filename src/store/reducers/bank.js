import * as actionTypes from '../actions/actionTypes'
const initialState = {
    banks:[],
    pickup_banks:[],
    account_banks:[],
    bank:null
}

const reducer = (state = initialState,action)=>{

    switch(action.type){

        case actionTypes.ADD_BANK:
            return{
                ...state,
                bank:action.result
            }
        case actionTypes.FETCH_BANKS:
            return{
                ...state,
                banks:action.result
            }

         case actionTypes.FETCH_ACCOUNT_BANKS:
            return{
                ...state,
                account_banks:action.result
            }
            case actionTypes.FETCH_PICKUP_BANKS:
            return{
                ...state,
                pickup_banks:action.result
            }
        default:
            return state

    }
}

export default reducer