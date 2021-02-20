import { ADD_POST, 
         REMOVE_TASK, 
         TOGGLE_COMPLETE, 
         FILTER_BY_ALL, 
         FILTER_BY_COMPLETED, 
         FILTER_BY_ACTIVE, 
         SEARCH_TASK,
         UPDATE_TASK_TEXT
        } from '../actions/names';
import { IAction } from '../actions/todo-actions';

interface IState {
    posts: any[],
    taskText: string,
    filter: string,
    searchText: string
}

const initialState: IState = {
    posts: [
        {label: 'Make a todo list', id: 1, isCompleted: false},
        {label: 'Fix a bugs', id: 2, isCompleted: false},
        {label: 'Upload to GitHub', id: 3, isCompleted: false}
    ],
    taskText: '',
    filter: 'all',
    searchText: ''
}

let nextId: number = 4;

const reducer = (state = initialState, action: IAction): IState => {
    let newPosts: any[];

    switch(action.type) {
        case ADD_POST:
            newPosts = [
                ...state.posts,
                {
                    label: action.payload!.body,
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

        case UPDATE_TASK_TEXT: 
            return {
                ...state,
                taskText: action.payload!.taskText
            }

        case REMOVE_TASK:
            newPosts = state.posts.filter(item => item.id !== action.payload!.id);

            return {
                ...state,
                posts: [
                    ...newPosts
                ]
            }
        case TOGGLE_COMPLETE:
            newPosts = state.posts.map(item => item.id === action.payload!.id ? 
                {...item, isCompleted: !item.isCompleted} : item);

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
                searchText: action.payload!.text
            }
            
        default: 
            return state
    }   
}

export default reducer;