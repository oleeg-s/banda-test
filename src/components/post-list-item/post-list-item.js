import React from 'react';
import {connect} from 'react-redux';
import {removeTask, toggleComplete} from '../../actions/todo-actions';

import './post-list-item.css'

const PostListItem = ({label, id, isCompleted, removeTask, toggleComplete}) => {

    let labelStyle = 'app-list-item-label'

    if (isCompleted) {
        labelStyle += ' completed'
    }

    return (
        <div className='app-list-item d-flex justify-content-between align-items-center'>
            <input 
                type='checkbox'
                className='checkbox'
                onChange={() => toggleComplete(id)}
                checked={isCompleted}/>
            <span 
                className={labelStyle}
                onClick={() => toggleComplete(id)}>
                {label}
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                    type='button' 
                    className='btn-trash btn-sm'
                    onClick={() => removeTask(id)}>
                        <i className='fa fa-trash-o'></i>
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    removeTask,
    toggleComplete
}

export default connect(null, mapDispatchToProps)(PostListItem)