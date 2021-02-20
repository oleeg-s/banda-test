import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import {connect} from 'react-redux';

import './post-list.css';

interface IPostListProps {
    posts: any[],
    filter: string,
    searchText: string
}

const PostList: React.FC<IPostListProps> = ({posts, filter, searchText}) => {

    const filteredItems = posts.filter((item: any) => {

        if (filter === 'completed') {
            item = item.isCompleted
        }

        if (filter === 'active') {
            item = !item.isCompleted
        }

        return item
    })
   
    const visibleItems = filteredItems.filter((item: any) => item.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1);

    const items = visibleItems.map((item: any) => {
        const {id, label, isCompleted} = item;

        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    label={label}
                    id={id}
                    isCompleted={isCompleted}/>
            </li>
        )
    })
    
    return (
        <ul className='app-list list-group'>
            {items}
        </ul>
    )
}

const mapStateToProps = ({posts, filter, searchText}: IPostListProps): IPostListProps => {
    return {
        posts,
        filter,
        searchText
    }
}

export default connect(mapStateToProps)(PostList);