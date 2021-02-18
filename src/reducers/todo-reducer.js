import {ADD_POST, 
        REMOVE_TASK, 
        TOGGLE_COMPLETE, 
        FILTER_BY_ALL, 
        FILTER_BY_COMPLETED, 
        FILTER_BY_ACTIVE, 
        SEARCH_TASK} from '../actions/names';

const initialState = {
    posts: [
        {label: 'Make a todo list', id: 1, isCompleted: false},
        {label: 'Fix a bugs', id: 2, isCompleted: false},
        {label: 'Upload to GitHub', id: 3, isCompleted: false}
    ],
    filter: 'all',
    searchText: ''
}

let nextId = 4

const reducer = (state = initialState, action) => {
    let newPosts

    switch(action.type) {
        case ADD_POST:
            newPosts = [
                ...state.posts,
                {
                    label: action.payload,
                    id: nextId++, 
                    isCompleted: false
                }
            ]

            return {
                ...state,
                posts: [
                    ...newPosts
                ]
            }

        case REMOVE_TASK:
            newPosts = state.posts.filter(item => item.id !== action.payload)

            return {
                ...state,
                posts: [
                    ...newPosts
                ]
            }
        case TOGGLE_COMPLETE:
            newPosts = state.posts.map(item => item.id === action.payload ? 
                {...item, isCompleted: !item.isCompleted} : item)

            return {
                ...state,
                posts: [
                    ...newPosts
                ]
            }

        case FILTER_BY_ALL: {
            return {
                ...state,
                filter: 'all'
            }
        }    

        case FILTER_BY_COMPLETED: 
            return {
                ...state,
                filter: 'completed'
            }

        case FILTER_BY_ACTIVE:
            return {
                ...state,
                filter: 'active'
            }
        
        case SEARCH_TASK:
            return {
                ...state,
                searchText: action.payload
            }
            
        default: 
            return state
    }   
}

export default reducer