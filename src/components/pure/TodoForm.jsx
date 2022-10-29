import React, {useRef} from 'react';
import PropTypes from 'prop-types';


const TodoForm = ({submit, onIncrease, number}) => {

    const newText = useRef();
    console.log('this is form number: ',number)
    return (
        <div>
            {number <1 ? <h2>Create your first task</h2>
            : <h2>Create more tasks</h2>
            }
            
            <form onSubmit={(e) => {
                e.preventDefault();
                submit(newText.current.value);
                newText.current.value = '';
                onIncrease();
                console.log(number)
            }}>
                <input type='text' ref={newText}/>
                <button type='submit'>
                    Create Todo
                </button>
            </form>
        </div>
    );
}

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default TodoForm;
