import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
// import {getToDoFilterType} from "./selector";

export default combineReducers({
    todos,
    visibilityFilter,
    // getToDoFilterType
})