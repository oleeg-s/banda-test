import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTasc} from '../../actions';

import './post-add-form.css';

const PostAddForm = ({addTasc}) => {

    const [text, updateText] = useState('')

    const onChange = (e) => {
        updateText(e.target.value)
    }

    return (
        <form 
            className='bottom-panel d-flex'
            onSubmit={(e) => {
                e.preventDefault()
                addTasc(text)
                updateText('')
            }}>
            <input
                type='text'
                placeholder='Добавить дело'
                className='form-control new-post-label'
                value={text}
                onChange={onChange}
            />
            <button
                type='submit'
                className='btn btn-outline-secondary'>
                Добавить</button>
        </form>
    )
}

const mapDispatchToProps = {
        addTasc
}

export default connect(null, mapDispatchToProps)(PostAddForm)