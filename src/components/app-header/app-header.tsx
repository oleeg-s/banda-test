import React from 'react';
import {connect} from 'react-redux';
import { IPosts } from '../../reducers/todo-reducer';

import './app-header.css';

interface IAppHeaderProps { posts: IPosts[] }

const AppHeader: React.FC<IAppHeaderProps> = ({posts}) => {
    return (
        <div className='app-header d-flex'>
            <h1>My Todo List</h1>
            <h2>{posts.length} tasks, {posts.filter((i) => i.isCompleted).length} completed</h2>
        </div>
    );
};

const mapStateToProps = ({posts}: IAppHeaderProps) => {
    return {
        posts
    };
};

export default connect(mapStateToProps)(AppHeader);