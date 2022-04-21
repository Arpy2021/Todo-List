import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_COMPLETE, EDIT_TODO, REMOVE_LIST} from "../actionsTypes";
import {FILTER_TYPE} from "../../constants/constType";


const initialState = {
    todos: [{
        id:Math.random(),
        task:'text',
        complete:false
    }]
}


const todos = (state = initialState,action) => {
    // console.log(action, 'iiiiii');
    switch (action.type) {
        case ADD_TODO:{
            const {id, task} = action.payload;
            return [
                {task,complete:false,id},
                ...state,
            ]
        }
        case TOGGLE_TODO: {
            // console.log('nnnn');
            const {id} = action.payload;
            return state.map(obj => obj.id === id ? {...obj, complete: !obj.complete} : obj)
        }
        case REMOVE_TODO: {
            const {id} =action.payload
            const filterTodo = state.filter((t) => t.id !== id)
            return filterTodo
        }

        case REMOVE_COMPLETE: {
            const {complete} = action.payload
            return  state.filter((t) => t.complete !== !complete)
        }
        case REMOVE_LIST: {
            const {complete} = action.payload
            return  state.filter((t) => t.complete === complete)
        }
        case EDIT_TODO: {
            const {id} =action.payload
            const updatedToDos = state.map((to) => {
                if(to.id === id){
                    return {...to, task: action.payload.updatedTask };
                }
                return to;
            })
            return updatedToDos
        }
        // case FILTER_TYPE.TODO:
        //     console.log('oooo')
        //     return state.todos.filter(todo => todo.complete);
        // case FILTER_TYPE.DONE:
        //     return state.todos.filter(todo => !todo.complete);
        default:
            return state.todos
    }
}

export default todos;