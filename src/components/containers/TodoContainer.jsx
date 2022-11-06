import { connect } from "react-redux";

// Actions
import {
  toggleTodo,
  deleteTodo,
} from "../../store/actions/actions";

import TodoList from "../pure/TodoList";
import TodosManager from "../pure/TodosManager";

// Filter Todo List
const filterTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_PENDING":
      return todos.filter((todo) => !todo.completed);
    case "SHOW_COMPLETED":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todosState, state.filterState),
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
  
  };
};

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
const TodosManagerContainer = connect(mapStateToProps, mapDispatchToProps)(TodosManager);


export default {
  TodosContainer:TodosContainer,
  TodosManagerContainer: TodosManagerContainer
}

;
