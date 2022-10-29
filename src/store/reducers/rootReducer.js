import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosCountReducer } from "./todosCountReducer";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers(
    {
        
        todosState: todosReducer,
        todosCountState: todosCountReducer,
        filterState: filterReducer,
        
        
    }
)