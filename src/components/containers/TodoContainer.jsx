import { connect } from 'react-redux'

// Actions
import { toggleTodo, deleteTodo, increaseCompleted, increasePending } from '../../store/actions/actions';

import TodoList from '../pure/TodoList';
import TaskManager from '../pure/TaskManager';


// Filter Todo List
const filterTodos = (todos, filter, emptyMessage) => {

    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_PENDING':
            return todos.length>0? todos.filter((todo) => !todo.completed) :todos;
        case 'SHOW_COMPLETED':
            return todos.filter((todo) =>  todo.completed);
        default:
            return todos;
    }

}

export const mapStateToProps = (state) => {
    
    return {
        todos: filterTodos(state.todosState, state.filterState )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        },
        deleteTodo: (id)=>{
            dispatch(deleteTodo(id))
        },
        increaseCompleted: (value)=>{
            dispatch(increaseCompleted(value))
        },
        increasePending: (value)=>{
            dispatch(increaseCompleted(value))
        }

    }
}


const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList,TaskManager)

export default TodosContainer;
