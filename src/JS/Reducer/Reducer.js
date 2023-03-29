import { ADD_TASK, DELETE_TASK, DONE_FILTER, DONE_TASK, UNDONE_FILTER } from "../ActionTypes/ActionTypes"

const initialState ={
    listTasks :[
    {id:Math.random(), text: 'task1' ,isDone : false},
    {id:Math.random(), text: 'task2' ,isDone : false}
    ]
}


const listReducer = (state = initialState, {type,payload}) =>{
    switch(type) {
        case ADD_TASK:
            return{...state, listTasks :[...state.listTasks,payload]}
    case DELETE_TASK:
        return{...state, listTasks:state.listTasks.filter(el=>el.id!== payload)}
        case DONE_TASK: 
           return{ 
            ...state, listTasks: state.listTasks.map((el) => 
            el.id=== payload ? {...el, isDone: !el.isDone} : el )

           }
           case DONE_FILTER:
            return{
                ...state, listTasks: state.listTasks.filter(el => el.isDone===true)
            }
           case UNDONE_FILTER:
            return{
                ...state, listTasks: state.listTasks.filter(el => el.isDone===false)
            }
            
        default:
            return state;
        }
}
export default listReducer;