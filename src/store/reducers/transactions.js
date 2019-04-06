import * as actionTypes from '../actions/actionTypes'
const initialState = {
    transactions:[
{id:'1',sender:'johnson moko',status:'pending',amount:'230','agent_commission':10,commission:'10',receiver:'joe'},
{id:'2',sender:'bela jok',status:'pending',amount:'230','agent_commission':10,commission:'10',receiver:'joe'},
{id:'3',sender:'boke loke',status:'pending',amount:'130','agent_commission':10,commission:'10',receiver:'opo'},
{id:'4',sender:'dodo no',status:'pending',amount:'300','agent_commission':10,commission:'10',receiver:'goe'},
{id:'5',sender:'bon moko',status:'pending',amount:'400','agent_commission':10,commission:'10',receiver:'dema'}]
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.Agent_Transactions:
            return {
                ...state
            }
        case actionTypes.FETCH_TRANSACTIONS:
            return {
                ...state,
                transactions:action.values
            }
         default:
            return state   

    }
}

export default reducer