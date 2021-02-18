import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTask} from '../../actions/todo-actions';

import './post-add-form.css';

const PostAddForm = ({addTask}) => {

    const [text, updateText] = useState('')

    const onChange = (e) => {
        updateText(e.target.value)
    }

    return (
        <form 
            className='bottom-panel d-flex'
            onSubmit={(e) => {
                e.preventDefault()

                if (text.length > 0) {
                    addTask(text)
                    updateText('')
                }
                
            }}>
            <input
                type='text'
                placeholder='Add task...'
                className='form-control new-post-label'
                value={text}
                onChange={onChange}
            />
            <button
                type='submit'
                className='btn btn-outline-secondary'>
                Add</button>
        </form>
    )
}

const mapDispatchToProps = {
        addTask
}

export default connect(null, mapDispatchToProps)(PostAddForm)