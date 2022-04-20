import style from "./header.module.scss"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/actions";


function Header() {
    const dispatch = useDispatch();
    const [text ,setText]=useState("")

    function inputChange (e) {
        setText(e.target.value.trimStart())
    }

    function formSubmit (e) {
         e.preventDefault();
          dispatch(addTodo(text))
            setText("");
    }

    return <div className={style.header}>
        <h1>To do input</h1>
        <div className={style.inputBlock} >
            <form onSubmit={formSubmit}
            >
                <input type="text"  required
                       className={style.taskInput}
                       placeholder={"New Todo"}
                       value={text}
                       onChange={inputChange}
                />
                <button className={style.addBtn} disabled="">Add new task</button>
            </form>
        </div>
    </div>
} export default Header