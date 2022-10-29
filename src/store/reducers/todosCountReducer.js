import {
  DECREASE_TODO,
  INCREASE_TODO,
  INCREASE_COMPLETED,
  INCREASE_PENDING,
} from "../actions/actions";
import { initialTodos } from "./todosReducer";

export let initialState = initialTodos;

export const todosCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_TODO :
      return action.payload.increase;
    case DECREASE_TODO :
      return action.payload.decrease;
    case INCREASE_COMPLETED :
      return action.payload.increase;
    case INCREASE_PENDING :
      return action.payload.increase;
    default:
      return state;
  }
};
