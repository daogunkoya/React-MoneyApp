import * as actionTypes from '../actions/actionTypes'
const initialState = {
    list:[],
    id:null
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_COMMISSIONS:
            return{
                ...state,
                list:action.values
            }
        case actionTypes.ADD_COMMISSION:
        return{
            ...state,
            id:action.value
        }
        default:
            return state
    }
}

export default reducer