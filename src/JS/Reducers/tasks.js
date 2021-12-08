import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    SELECT_ALL,
    SELECT_DONE,
    SELECT_UNDONE,
    ADD_TODO_TAB,
    EDIT_TODO_TAB,
    DELETE_TODO_TAB
} from "../Constants/actionTypes";
const initialState = {
    tasks: [
        {
            id: 1,
            description: "Do ws State",
            done: false,
        },
        {
            id: 2,
            description: "Challenge State",
            done: false,
        },
        {
            id: 3,
            description: "WS react",
            done: false,
        },
    ],
    toggle:"all",
    table:[]
};
export const taskReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case ADD_TODO_TAB:
                return { ...state, table: [...state.table, action.payload] };


        case EDIT_TODO:
            return { ...state, tasks:state.tasks.map(todo =>
                (todo.id === action.payload) 
                  ? {...todo, done: !todo.done}
                  : todo,
                  
              ) };
         case EDIT_TODO_TAB:
                return { ...state, table:state.table.map(todo =>
                    (todo.id === action.payload) 
                      ? {...todo, done: !todo.done}
                      : todo,
                      
                  ) };
        
        case DELETE_TODO:
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task) => task.id !== action.payload
                ),
            };
            case DELETE_TODO_TAB:
                return {
                    ...state,
                    table: state.tasks.filter(
                        (task) => task.id !== action.payload
                    ),
                };
            case SELECT_ALL:
                return {
                    ...state,
                    toggle:"all",
                    table:state.tasks
                };
            case SELECT_DONE:
                return {
                        ...state,
                        toggle:"done",
                        table:state.tasks.filter(
                            (task) => task.done === true
                        )
                    };
            case SELECT_UNDONE:
                return {
                     ...state,
                     toggle:"undone",
                     table:state.tasks.filter(
                        (task) => task.done === false
                    )
                        };

        default:
            return state;
    }
};
