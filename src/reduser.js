const initialState = {
    posts: [
        {label: 'Todo1', id: 1, isCompleted: false},
        {label: 'Todo2', id: 2, isCompleted: false},
        {label: 'Todo3', id: 3, isCompleted: false}
    ],
    filter: 'all'
}

let nextId = 4

const reducer = (state = initialState, action) => {
    let newPosts

    switch(action.type) {

        case 'ADD_POST':
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

        case 'REMOVE_TASC':

            newPosts = state.posts.filter(item => item.id !== action.payload)

            return {
                ...state,
                posts: [
                    ...newPosts
                ]
            }
        case 'TOGGLE_COMPLETE':

            newPosts = state.posts.map(item => item.id === action.payload ? 
                {...item, isCompleted: !item.isCompleted} : item)

            return {
                ...state,
                posts: [
                    ...newPosts
                ]
            }

        case 'FILTER_BY_ALL': {
            return {
                ...state,
                filter: 'all'
            }
        }    

        case 'FILTER_BY_COMPLETED': 
            return {
                ...state,
                filter: 'completed'
            }

        case 'FILTER_BY_ACTIVE':
        return {
            ...state,
                filter: 'active'
        }
            
        default: 
            return state
    }   
}

export default reducer