import React from 'react'
import { useSelector } from "react-redux";
import Todo from './Todo';

function TodoList() {
    const todos = useSelector((state) => state.taskReducers.table);
    
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                {todos.map((el) => (
                <Todo key={el.id} el={el} />
            ))}
                </ul>
            </div>
        </div>
    )
}
export default TodoList
