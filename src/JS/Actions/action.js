import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    SELECT_ALL,
    SELECT_UNDONE,
    SELECT_DONE
} from "../Constants/actionTypes";

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    };
};
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id,
    };
};
export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload: id,
    };
};
export const selectAll = () => {
    return {
        type: SELECT_ALL,
    };
};
export const selectDone = () => {
    return {
        type: SELECT_DONE,
    };
};
export const selectUndone = () => {
    return {
        type: SELECT_UNDONE,
    };
};

