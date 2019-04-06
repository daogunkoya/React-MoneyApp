import * as actionType from  '../actions/actionTypes'

const initialState = {
    list:[],
    id:null
}

const reducer = (state = initialState,action)=>{
        switch(action.type){
           
            case actionType.FETCH_RECEIVERS:
                return {
                    ...state,
                    list:action.values
                }
            case actionType.ADD_RECEIVER:
            console.log('receivers=',action.value)
                return {
                        ...state,
                        id:action.value.id
                }
            default:
                return state

        }
}

export default reducer