import React from 'react'
import { useDispatch } from 'react-redux';
import { editTodo,deleteTodo, editTodotab, deleteTodotab } from '../JS/Actions/action';


function Todo({el}) {
    const dispatch = useDispatch();
    return (
        <div className="todo">
            <li className={`todo-item ${el.done? "completed" : ''}`}>{el.description}</li>
            <button className="complete-btn" onClick={() => {dispatch(editTodo(el.id));dispatch(editTodotab(el.id))}}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={() => {dispatch(deleteTodo(el.id));dispatch(deleteTodotab(el.id))}}>
                <i className="fas fa-trash"></i>
            </button>
            
        </div>
    )
}

export default Todo
