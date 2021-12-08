import { combineReducers } from "redux";
import { taskReducers } from "./tasks";
export const rootReducer = combineReducers({ taskReducers});
