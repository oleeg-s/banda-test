import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import {connect} from 'react-redux';

import './post-list.css'

const PostList = ({posts, filter}) => {
   
    let filterredItems

    if (filter === 'all') {
        filterredItems = posts
    }
    
    if (filter === 'completed') {
        filterredItems = posts.filter(item => item.isCompleted === true)
    } 

    if (filter === 'active') {
        filterredItems = posts.filter(item => item.isCompleted === false)
    } 

    console.log(filterredItems)
    const items = filterredItems.map(item => {
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

const mapStateToProps = ({posts, filter}) => {
    return {
        posts,
        filter
    }
}

export default connect(mapStateToProps)(PostList)