import {FILTER_TYPE} from "../../constants/constType";
import {SET_FILTER} from "../actionsTypes";

const initialState = FILTER_TYPE.TODO

export const setFilter = filter => {
    return {
        type:SET_FILTER,
        payload:filter
    }
}

 const visibilityFilter = (state = initialState,action) =>{
     // console.log(action, 'ddddddd', state)
    switch (action.type) {
        case  SET_FILTER:
                console.log('SET_FILTER');
            const {filter} = action.payload
            return filter
        default: {
            return state
        }
    }
}
export default visibilityFilter