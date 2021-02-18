import React from 'react';
import {connect} from 'react-redux';
import {searchTask} from '../../actions/todo-actions';

import './search-panel.css'

const SearchPanel = ({searchText, searchTask}) => {
    return (
        <input
            className='form-control search-input'
            type='text'
            placeholder='Search...'
            value={searchText}
            onChange={(e) => {
                searchTask(e.target.value)
            }}
        />
    )
}

const mapStateToProps = ({searchText}) => {
    return {
        searchText
    }
}

const mapDispatchToProps = {
    searchTask
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel)