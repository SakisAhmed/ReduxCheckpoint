import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTodo,addTodoTab,selectAll,selectDone,selectUndone } from "../JS/Actions/action";

function Form() {
  const star = useSelector((state) => state.taskReducers.toggle);
  useEffect(()=>{dispatch(selectAll())},[])
    const [inputText, setInputText]=useState("");
    const inputTextHandle=(e)=>{
        setInputText(e.target.value)
    }
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const toDo = {
            id: Math.random(),
            description:inputText,
            done:false
        };
        dispatch(addTodo(toDo));
        dispatch(addTodoTab(toDo));

    };  
    const selectsAll =(e)=>{
      e.preventDefault();
      dispatch(selectAll());
      console.log(star)
    }
    const selectsDone =(e)=>{
      e.preventDefault();
      dispatch(selectDone());
      console.log(star); 
    }
    const selectsUndone =(e)=>{
      e.preventDefault();
      dispatch(selectUndone());
      console.log(star)
    }
    return (
        <div>
            <form>
      <input type="text" value={inputText} className="todo-input" onChange={inputTextHandle}/>
      <button className="todo-button" type="submit" onClick={handleSubmit}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div  >
        <button onClick={selectsAll}>All</button>
        <button onClick={selectsDone}>Done</button>
        <button onClick={selectsUndone}>UnDone</button>
      </div>
    </form>
        </div>
    )
}

export default Form
