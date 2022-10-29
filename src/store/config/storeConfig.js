import {configureStore} from '@reduxjs/toolkit'
import { rootReducer } from '../reducers/rootReducer';

//Using configureStore() instead of createStore(), that is deprecated

export let emptyTodo;
export const createStore=()=>{
    
    let store= configureStore(
        {
            reducer : rootReducer
        }
    )

    return store;
}

