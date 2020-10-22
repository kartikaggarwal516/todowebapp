import { combineReducers } from "redux"
import tasks from "./TaskReducer"
import completedTasks from "./DoneTaskReducer"

export default combineReducers({
    tasks: tasks,
    completedTasks: completedTasks
})