import { ADD_TASK, DELETE_TASK, DONE_FILTER, DONE_TASK, EDIT_TASK, UNDONE_FILTER } from "../ActionTypes/ActionTypes"

export const addTask =(newTask) =>{
   
    return{
        type: ADD_TASK,
        payload : newTask
    }
}
export const deleteTask =(id) =>{
    return {
        type: DELETE_TASK,
        payload : id
    }
}
export const doneTask =(id) =>{
    return{
        type: DONE_TASK,
        payload: id
    }
}
export const editTask=(id, newTask) =>{
   
    return{
        type: EDIT_TASK,
        payload: {id,newTask}
    }
}
export const doneFilter=(isDone) =>{
   
    return{
        type: DONE_FILTER,
        payload: {isDone}
    }}
    export const undoneFilter=(isDone) =>{
   
        return{
            type: UNDONE_FILTER,
            payload: {isDone}}}