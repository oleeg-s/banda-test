import React from 'react';
import {connect} from 'react-redux';

import './app-header.css';

const AppHeader = ({posts}) => {
    return (
        <div className='app-header d-flex'>
            <h1>My Todo List</h1>
            <h2>{posts.length} tasks, {posts.filter(i => i.isCompleted).length} completed</h2>
        </div>
    )
}

const mapStateToProps = ({posts}) => {
    return {
        posts
    }
}


export default connect(mapStateToProps)(AppHeader)