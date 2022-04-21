import style from "../list/list.module.scss";
import {Delete, Edit} from "../../assets";
import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {toggleToDo} from  "../../redux/actions"


function Item({todo,task,removeToDo,editToDo,id}) {

    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false)
    const [value,setValue] = useState(task)
    const [checked, setChecked] = useState(false)


    useEffect(() => {
    setChecked(todo.complete)
    },[todo])

    const inputChecked = () => dispatch(toggleToDo(todo.id))

    const saveToDo = () => {
        editToDo(todo.id,value);
        setEdit(false)
    }
    function changeValue (e) {
        setValue(e.target.value)
    }
    function todoSave () {
        saveToDo(id,value)
    }
    return <div className={style.listBlock}>
        <div className={ `${!checked ? "" : style.tasksDone }`}>
            { edit  ?
                <div className={style.newToDoEdit}>
                    <input className={style.editInput}
                        value={value}
                        onChange={changeValue}
                    />
                </div> :
                <div>{task}</div>
        }
        </div>
        {
            edit ?
                <div className={style.editBtnBlock}>
                    <button  className={style.editBtn} onClick={todoSave}>Save</button>
                </div> :
                <div className={style.editBlock}>
                    <label className={style.labelBlock}>
                        <input type="checkbox" checked={checked}
                               onChange={inputChecked}/>
                        <Edit onClick={() => setEdit(true)}/>
                        <Delete onClick={removeToDo} />
                    </label>
                </div>
        }
    </div>
}export default Item