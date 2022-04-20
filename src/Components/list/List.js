import style from "./list.module.scss"
import Item from "../item/Item";
import {useDispatch, useSelector} from "react-redux";
import visibilityFilter from "../../redux/reducers/visibilityFilter";
import {removeToDo, setFilter,editToDo} from "../../redux/actions";
// import {getToDoFilterType} from  "../../redux/reducers/selector"
import todos from "../../redux/reducers/todos";
import {FILTER_TYPE} from "../../constants/constType";

function List() {
    const dispatch = useDispatch()
    const {visibilityFilter, todos } = useSelector(state => state)
      //   const filterTodos = getToDoFilterType(visibilityFilter, todos)
      // console.log(getToDoFilterType, 'visibilityFilter')
      // console.log(todos, 'todos')
    const update = (id , updatedTask ) => {
        dispatch(editToDo({id,updatedTask}))
    }
    let filteredList = []
    if (visibilityFilter === FILTER_TYPE.DONE){
        console.log('DONE');
        filteredList = todos.filter((todo) => todo.complete)
    }else if(visibilityFilter === "TODO"){
        filteredList = todos.filter((todo) => !todo.complete)
    }else{
        filteredList = todos
    }
    console.log(filteredList, 'filteredList');
    console.log(visibilityFilter, 'visibilityFilter');
    return <div className={style.list}>
        <div className={style.taskList}>
            {filteredList ?.map((todo) => {
                return <Item
                    key={todo.id}
                    id={todo.id}
                    todo={filteredList}
                    todos={todos}
                    task={todo.task}
                    removeToDo={() => dispatch(removeToDo(todo))}
                    editToDo={update}
                />
            } )}
        </div>
    </div>
} export default List

