
// Incremental ID for Todos
let nextTodoID = 0;
// Action Types:
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const INCREASE_TODO = 'INCREASE_TODO';
export const DECREASE_TODO = 'DECREASE_TODO';
export const INCREASE_COMPLETED= 'INCREASE_COMPLETED';
export const INCREASE_PENDING= 'INCREASE_PENDING';


let number= 0;

/**
 * 
 * @param {string} text 
 * @returns action ADD_TODO
 */
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoID ++,
            text
        }
    }
}

/**
 * 
 * @param {number} id
 * @returns action DELETE_TODO
 */

 export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id: id,
          
        }
    }
}

export const increaseCompleted=(value)=>{
    return {
        type: INCREASE_COMPLETED,
        payload: {
            increase: ++value
        }
    }
}

export const increasePending=(value)=>{
    return {
        type: INCREASE_COMPLETED,
        payload: {
            increase: ++value
        }
    }
}


/**
 * 
 * @param {number} id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id,filter) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id,filter
        }
    }
}

/**
 * @param {number} number
 * @returns action INCREASE_TODO
 * 
 */

export const increaseTodo=()=>{
    
    return {
        type: INCREASE_TODO,
        payload: {
            increase:++number
        }

        
    }
}

/**
 * @param {number} number
 * @returns action DECREASE_TODO
 */

export const decreaseTodo=()=>{
   
    return {
        type: DECREASE_TODO,
        payload: {
            decrease: --number
        }
    }
}



/**
 * 
 * @param {string} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }
    }
}





