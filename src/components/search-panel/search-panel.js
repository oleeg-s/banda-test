import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {searchTask} from '../../actions/actions';

import './search-panel.css'

const SearchPanel = ({searchTask}) => {

    const [text, setText] = useState('')

    useEffect(() => {
        searchTask(text)
    }, [searchTask, text])

    return (
        <input
            className='form-control search-input'
            type='text'
            placeholder='Search...'
            value={text}
            onChange={(e) => {
                setText(e.target.value)
            }}
        />
    )
}

const mapDispatchToProps = {
    searchTask
}

export default connect(null, mapDispatchToProps)(SearchPanel)