import { connect } from 'react-redux';
import TaskManager from '../pure/TaskManager';
import { decreaseTodo, increaseTodo } from '../../store/actions/actions';

 const mapStateToProps=(state)=>{
  
    return {
        number: state.todosCountState
    }
}

const mapDispatchToProps=(dispatch)=>{

    return{
        onPendingIncrease: ()=>{
    

            dispatch(increaseTodo()); 
        },
        onPendingDecrease: ()=>{
            dispatch(decreaseTodo());
        }
    }
}


const TodoCountContainer= connect(mapStateToProps, mapDispatchToProps)(TaskManager);

export default TodoCountContainer;