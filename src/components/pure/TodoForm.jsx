import React, {useRef} from 'react';
import PropTypes from 'prop-types';


const TodoForm = ({submit, todos}) => {

    const newText = useRef();
    return (
        <div>
            
            
            <form onSubmit={(e) => {
                e.preventDefault();
                newText.current.value.length>0 ?  submit(newText.current.value): alert('Tasks should not be empty')
               
                
                newText.current.value = '';
                
            }}>
                <input type='text' ref={newText} />
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
