//2.action types
export const TODOTASKS = "TODOTASKS"
export const REMOVETASK = "REMOVETASK"
export const DONETASK = "DONETASK"
export const SORTTODOTASK = "SORTTODOTASK"
export const SORTDONETASK = "SORTDONETASK"

//3.Action Creators
export const addTask = data => {
    return{
        type: TODOTASKS,
        payload: data
    }
}
export const removeTask = index => {
    return{
        type: REMOVETASK,
        payload: index
    }
}
export const addDoneTask = task => {
    return{
        type: DONETASK,
        payload: task
    }
}
export const sortToDoTasks = () => {
    return{
        type: SORTTODOTASK        
    }
}
export const sortDoneTasks = () => {
    return{
        type: SORTDONETASK        
    }
}