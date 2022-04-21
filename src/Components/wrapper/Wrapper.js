import Header from "../header/Header";
import Filter from "../filter/Filter";
import List from "../list/List";
import React from 'react';
import style from './wrapper.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {removeCompleteToDo, removeToDoList} from "../../redux/actions";


function Wrapper(){

    const { todos } = useSelector(state => state)

    const dispatch = useDispatch()

    return <div>
        <Header/>
        <Filter/>
        <List/>
        <div className={ `${todos.length === 0 ? style.buttonNun : style.wrapper}`} >
            <button className={ style.deleteBtn  }
                   onClick={() => dispatch(removeCompleteToDo(todos))}
            >Delete done tasks</button>
            <button className={ style.deleteBtn }
                    onClick={() => dispatch(removeToDoList(todos))}
            >Delete all tasks</button>
        </div>
    </div>
}export default Wrapper