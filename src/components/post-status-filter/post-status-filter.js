import React from 'react';
import {connect} from 'react-redux';
import {filterByCompleted, filterByActive, filterByAll} from '../../actions';

import './post-status-filter.css'

const PostStatusFilter = ({filterByCompleted, filterByActive, filterByAll}) => {
    return (
        <div className='btn-group'>
            <button 
                className='btn btn-info'
                onClick={() => filterByAll()}
                >Все</button>
            <button 
                className='btn btn-outline-secondary'
                onClick={() => filterByActive()}
                >Активные</button>
            <button 
                className='btn btn-outline-secondary'
                onClick={() => filterByCompleted()}
                >Выполнено</button>
        </div>
    )
}

const mapDispatchToProps = {
    filterByCompleted,
    filterByActive,
    filterByAll
}

export default connect(null, mapDispatchToProps)(PostStatusFilter)