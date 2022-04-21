import {ADD_TODO, TOGGLE_TODO, SET_FILTER, REMOVE_TODO, REMOVE_COMPLETE, EDIT_TODO, REMOVE_LIST} from "./actionsTypes";

let nextTodoId = 0

export const addTodo = task=> ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        task
    }
})


export const toggleToDo = id => ({
    type: TOGGLE_TODO,
    payload:{id}
})


export const removeToDo = todo => {
   return {
    type: REMOVE_TODO,
    payload:todo
    }
}

export const removeToDoList = to => {
    return {
        type: REMOVE_LIST,
        payload:to
    }
}
export const removeCompleteToDo = to => {
    return {
        type: REMOVE_COMPLETE,
        payload:to
    }
}

// export const setFilter = filter => {
//     console.log(filter, 'setFilter');
//     return    {
//         type:SET_FILTER,
//         payload:filter
//     }
// }

export const editToDo = todo => {
   return{
       type: EDIT_TODO,
       payload:todo
   }
}

