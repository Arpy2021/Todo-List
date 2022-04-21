import style from './filter.module.scss'
import {FILTER_TYPE} from '../../constants/constType'
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../redux/reducers/visibilityFilter";
// import {getToDoFilterType} from "../../redux/reducers/selector";



function Filter() {
 const dispatchFilter = useDispatch()
    const {visibilityFilter, todos } = useSelector(state => state)
    // const filterTodos = getToDoFilterType(visibilityFilter, todos)

    function itemFilter (type) {
       dispatchFilter(setFilter(type))
       //  setFilter(type)
        // console.log(type, 'aaaz')
    }

    return <div className={style.filter}>
        <h1>To do List</h1>
        <div className={style.filterBlock}>
            <button className={style.filterBtn} onClick={() =>itemFilter(FILTER_TYPE.ALL) }>All</button>
            <button className={style.filterBtn} onClick={() => itemFilter(FILTER_TYPE.DONE) }>Done</button>
            <button className={style.filterBtn} onClick={() => itemFilter(FILTER_TYPE.TODO) }>To do</button>
        </div>
    </div>
}export  default Filter
