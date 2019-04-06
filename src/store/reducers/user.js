import * as actionTypes from '../actions/actionTypes'
const initialState = {
    list:[
    { id:1,fname:'john',lname:'mogo',name:'john mogo', type:'agent' },
    { id:2,fname:'Boka',lname:'ger',name:'Boka ger', type:'agent' },
    { id:3,fname:'romet',lname:'opoogo',name:'romet opoogo', type:'agent' },
    { id:4,fname:'john',lname:'kio',name:'john kio', type:'agent' },
    ],
   active:{
    id:1,
    fname:'john',
    lname:'mogo',
    name:'john mogo',
    type:'agent'
   }
}

const reducer = (state = initialState, action)=>{
        switch(action.type){
            case actionTypes.GET_USER:
                return {
                    ...state,
                   list:action.result
                }
            case actionTypes.User_Type :
                return {
                    ...state
                
            }
            case actionTypes.Is_Agent :
                return {
                    ...state
                
            }

            case actionTypes.Is_Customer :
                return {
                    ...state
                
            }
            case actionTypes.Get_Customers:
            return {
                ...state
            }
            default:
            return state
        }
}

export default reducer