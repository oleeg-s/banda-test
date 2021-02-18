import {ADD_POST, 
        REMOVE_TASK, 
        TOGGLE_COMPLETE, 
        FILTER_BY_ALL, 
        FILTER_BY_COMPLETED, 
        FILTER_BY_ACTIVE, 
        SEARCH_TASK} from './names';

const addTask = (body) => {
    return {
        type: ADD_POST,
        payload: body
    }
}

const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        payload: id
    }
}

const toggleComplete = (id) => {
    return {
        type: TOGGLE_COMPLETE,
        payload: id
    }
}

const filterByAll = () => {
    return {
        type: FILTER_BY_ALL
    }
}

const filterByCompleted = () => {
    return {
        type: FILTER_BY_COMPLETED
    }
}

const filterByActive = () => {
    return {
        type: FILTER_BY_ACTIVE
    }
}

const searchTask = (text) => {
    return {
        type: SEARCH_TASK,
        payload: text
    }
}

export {
    addTask,
    removeTask,
    toggleComplete,
    filterByAll,
    filterByCompleted,
    filterByActive,
    searchTask
}