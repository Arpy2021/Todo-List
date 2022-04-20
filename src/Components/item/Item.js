import style from "../list/list.module.scss";
import {Delete, Edit} from "../../assets";
import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {toggleToDo} from  "../../redux/actions"


function Item({todo,task,removeToDo,editToDo,id}) {

    // function upFirst(str) {
    //     return str.charAt(0).toUpperCase() + str.slice(1)
    // }
    // console.log(upFirst('fruits'))

    // let arr = [5, 3, 8, 1];
    // filterRange(arr, 4, 7);
    // function filterRange(arr, a, b) {
    //
    //     for (let i = 0; i < arr.length; i++) {
    //         let value = arr[i];
    //
    //         if (value < a || value > b) {
    //             arr.splice(i, 1);
    //             i--
    //             console.log(arr)
    //         }
    //     }
    // }console.log(arr)

    // let users = [
    //     { name: "Vasya", age: "25", id: 1 },
    //     { name: "John", age: "31", id: 2 },
    //     { name: "Martina", age: "23", id: 3 }
    // ];
    //
    //
    // function getAverageAge() {
    //     return users.reduce((average, user) => average + user.age, 0) / users.length
    // }
    //
    // console.log(getAverageAge(users))

    // let str = '';
    //
    // for (let i = 1; i < 10; i++) {
    //     str = str + i;
    //
    // } str = str.split('').reverse().join('')
    //     console.log(str)
    // let arr = [1, 2, 3, 4, 5];
    //   let sum = 0;
    //
    //   for (let i = 0; i < arr.length; i++)
    //       sum += arr[i];
    //
    //   console.log(sum)

    // let salaries = {
    //
    // };
    //
    // let sum = 0;
    // for (let key in salaries) {
    //     sum += salaries[key];
    // }console.log(sum)

    // let obj = {green: 'Կանաչ', red: 'Կարմիր', blue: 'Կապույտ'}
    //
    // for(let key in obj)
    //     console.log(`${key}-${obj[key]}`)

    // function Years (year) {
    //     if (year % 100 === 0) {
    //         year = year / 100;
    //     } else {
    //         year = (year / 100) + 1;
    //     }
    //     return Math.round(year);
    // }
    //
    // console.log(Years(1700))
    //
    // function Censure (year) {
    //     return Math.ceil(year / 100)
    // }
    // console.log(Censure(2021))
    //
    //
    // function myResult(str) {
    //    return  str === str.split('-').reverse().join('');
    // }
    //     console.log(myResult('a-a-z-a-a'))

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