import * as actionTypes from '../actions/actionTypes'
const initialState = {
    list:[
        {id:1,name:'hem ramo',mobile:'2345533',member:'iko'},
        {id:2,name:'ger jui',mobile:'2345533',member:'cherooe'},
        {id:3,name:'rabiu tonko',mobile:'2345533',member:'omo'},
        {id:4,name:'dena raka',mobile:'2345533',member:'ferderma'},

    ],
    senderMenu:[],
    id:null
}

const agentTransaction = (state,action)=>{
    return {
        ...state,    
    }
}
const getSenders = (state,action)=>{
    return {
        ...state,
        list:action.value
    }
}
const showSenderMenu = (state,action)=>{
    return{
        ...state,
        senderMenu:action.menu
    }
}
const addSender = (state,action)=>{
    return{
        ...state,
        id:action.result

    }
}
  


const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.Agent_Transactions: return agentTransaction(state,action)  
        case actionTypes.Get_Senders:return getSenders(state,action)
        case actionTypes.Show_Senders_Menu:return showSenderMenu(state,action)   
        case actionTypes.ADD_SENDER:return addSender(state,action)
        default: return state

    }
}

export default reducer

