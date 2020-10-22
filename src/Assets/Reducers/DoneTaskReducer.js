import {DONETASK,SORTDONETASK} from "../Actions/Actions"

let defaultstate=[]
export default function DoneTaskReducer(state = defaultstate, action){
    switch(action.type){
        case DONETASK: {
            state = [...state, action.payload]
            return state
        }
        case SORTDONETASK: {            
            state.sort((a,b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1)
            return [...state]
        }        
        default: return state
    }
}