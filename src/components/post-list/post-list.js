import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import {connect} from 'react-redux';

import './post-list.css'

const PostList = ({posts, filter, searchText}) => {
   
    let filteredItems

    if (filter === 'all') {
        filteredItems = posts
    }
    
    if (filter === 'completed') {
        filteredItems = posts.filter(item => item.isCompleted === true)
    } 

    if (filter === 'active') {
        filteredItems = posts.filter(item => item.isCompleted === false)
    } 

    if (searchText.length > 0) {
        filteredItems = posts.filter(item => item.label.indexOf(searchText) > -1)
    }

    const items = filteredItems.map(item => {
        const {id, label, isCompleted} = item

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

const mapStateToProps = ({posts, filter, searchText}) => {
    return {
        posts,
        filter,
        searchText
    }
}

export default connect(mapStateToProps)(PostList)