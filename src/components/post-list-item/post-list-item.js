import React from 'react';
import {connect} from 'react-redux';
import {removeTasc, toggleComplete} from '../../actions';

import './post-list-item.css'

const PostListItem = ({label, id, isCompleted, removeTasc, toggleComplete}) => {

    let labelStyle = 'app-list-item-label'

    if (isCompleted) {
        labelStyle += ' completed'
    }

    return (
        <div className='app-list-item d-flex justify-content-between'>
            <input 
                type='checkbox'
                onChange={() => toggleComplete(id)}
                checked={isCompleted ? true : false}/>
            <span 
                className={labelStyle}
                onClick={() => toggleComplete(id)}>
                {label}
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                    type='button' 
                    className='btn-trash btn-sm'
                    onClick={() => removeTasc(id)}>
                        <i className='fa fa-trash-o'></i>
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    removeTasc,
    toggleComplete
}

export default connect(null, mapDispatchToProps)(PostListItem)