import React from 'react';
import {connect} from 'react-redux';

import './app-header.css';

type appHeaderProps = { [key: string]: any }

const AppHeader: React.FC<appHeaderProps> = ({posts}) => {
    return (
        <div className='app-header d-flex'>
            <h1>My Todo List</h1>
            <h2>{posts.length} tasks, {posts.filter((i: appHeaderProps) => i.isCompleted).length} completed</h2>
        </div>
    )
}

const mapStateToProps = ({posts}: appHeaderProps): appHeaderProps => {
    return {
        posts
    }
}

export default connect(mapStateToProps)(AppHeader);