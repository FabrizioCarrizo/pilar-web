import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import { decreaseTodo, increaseTodo } from '../../store/actions/actions';
import TodoForm from '../pure/TodoForm'
const mapStateToProps=(state)=>{
    return {
        number: state.todosCountState
    }
}


const mapDispatchToProps =(dispatch)=> {
    return {
        submit: (text)=>{
            dispatch(addTodo(text))
        },
        onIncrease: ()=>{
    

            dispatch(increaseTodo()); 
        },
    } 
}


const TodoFormContainer=connect(mapStateToProps, mapDispatchToProps)(TodoForm);
export default TodoFormContainer;