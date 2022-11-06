import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/actions";
// Initial TodosState
// Initialy todos is empty
export let initialTodos = [];

export const todosReducer = (state = initialTodos, action, id) => {
  switch (action.type) {
    case ADD_TODO :
      

      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];

    case DELETE_TODO :
      return state.filter(({id})=> id!==action.payload.id)
      
        
      
    case TOGGLE_TODO :
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );

    default:
      return state;
  }
};
