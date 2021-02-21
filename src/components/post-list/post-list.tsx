import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import {connect} from 'react-redux';
import { IPosts } from '../../reducers/todo-reducer';

import './post-list.css';

interface IPostListProps {
    posts: IPosts[],
    filter: string,
    searchText: string
}

const PostList: React.FC<IPostListProps> = ({posts, filter, searchText}) => {
    
    const filteredItems = posts.filter((item: IPosts) => {

        if (filter === 'completed') {
            return item.isCompleted;
        } 

        if (filter === 'active') {
            return !item.isCompleted;
        } 

        return item;
    });
   
    const visibleItems = filteredItems.filter((item: IPosts) => item.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1);

    const items = visibleItems.map((item: IPosts) => {
        const {id, label, isCompleted} = item;

        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    label={label}
                    id={id}
                    isCompleted={isCompleted}/>
            </li>
        );
    });
    
    return (
        <ul className='app-list list-group'>
            {items}
        </ul>
    );
};

const mapStateToProps = ({posts, filter, searchText}: IPostListProps): IPostListProps => {
    return {
        posts,
        filter,
        searchText
    };
};

export default connect(mapStateToProps)(PostList);