import {TODOTASKS} from "../Actions/Actions"
import {REMOVETASK} from "../Actions/Actions"
import {SORTTODOTASK} from "../Actions/Actions"

let defaultstate=[]
export default function TaskReducer(state = defaultstate, action){
    switch(action.type){
        case TODOTASKS: {
            state = [...state, action.payload]
            return state
        }
        case REMOVETASK: {            
            state.splice(action.payload,1)
            return state
        }
        case SORTTODOTASK: {            
            state.sort((a,b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1)
            return [...state]
        }
        default: return state
    }
}