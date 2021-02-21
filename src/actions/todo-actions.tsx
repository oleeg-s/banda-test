import {ADD_POST, 
        REMOVE_TASK, 
        TOGGLE_COMPLETE, 
        FILTER_BY_ALL, 
        FILTER_BY_COMPLETED, 
        FILTER_BY_ACTIVE, 
        SEARCH_TASK,
        UPDATE_TASK_TEXT} from './names';

export interface IAction {
    type: string,
    payload?: { [key: string]: any }
}

const addTask = (body: string): IAction => {
    return {
        type: ADD_POST,
        payload: {
            body: body
        }
    };
};

const updateTaskText = (taskText: string): IAction => {
    return {
        type: UPDATE_TASK_TEXT,
        payload: {
            taskText
        }
    };
};

const removeTask = (id: number): IAction => {
    return {
        type: REMOVE_TASK,
        payload: {
            id
        }
    };
};

const toggleComplete = (id: number): IAction => {
    return {
        type: TOGGLE_COMPLETE,
        payload: {
            id
        }
    };
};

const filterByAll = (): IAction => {
    return {
        type: FILTER_BY_ALL
    };
};

const filterByCompleted = (): IAction => {
    return {
        type: FILTER_BY_COMPLETED
    };
};

const filterByActive = (): IAction => {
    return {
        type: FILTER_BY_ACTIVE
    };
};

const searchTask = (text: string): IAction => {
    return {
        type: SEARCH_TASK,
        payload: {
            text
        }
    };
};

export {
    addTask,
    updateTaskText,
    removeTask,
    toggleComplete,
    filterByAll,
    filterByCompleted,
    filterByActive,
    searchTask
};