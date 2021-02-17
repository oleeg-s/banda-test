import React from 'react';
import {connect} from 'react-redux';
import {filterByCompleted, filterByActive, filterByAll} from '../../actions/actions';

import './post-status-filter.css'

const PostStatusFilter = ({filter, filterByCompleted, filterByActive, filterByAll}) => {
    return (
        <div className='btn-group'>
            <button 
                name='all'
                className={`btn ${filter === 'all' ? 'btn-info' : 'btn-outline-secondary'}`}
                onClick={() => filterByAll()}
                >All</button>
            <button 
                name='active'
                className={`btn ${filter === 'active' ? 'btn-info' : 'btn-outline-secondary'}`}
                onClick={() => filterByActive()}
                >Active</button>
            <button 
                name='completed'
                className={`btn ${filter === 'completed' ? 'btn-info' : 'btn-outline-secondary'}`}
                onClick={() => filterByCompleted()}
                >Completed</button>
        </div>
    )
}

const mapStateToProps = ({filter}) => {
    return {
        filter
    }
}

const mapDispatchToProps = {
    filterByCompleted,
    filterByActive,
    filterByAll
}

export default connect(mapStateToProps, mapDispatchToProps)(PostStatusFilter)