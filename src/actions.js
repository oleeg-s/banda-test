const addTasc = (body) => {

    return {
        type: 'ADD_POST',
        payload: body
    }
}

const removeTasc = (id) => {

    return {
        type: 'REMOVE_TASC',
        payload: id
    }
}

const toggleComplete = (id) => {

    return {
        type: 'TOGGLE_COMPLETE',
        payload: id
    }
}

const filterByAll = () => {
    return {
        type: 'FILTER_BY_ALL'
    }
}

const filterByCompleted = () => {
    return {
        type: 'FILTER_BY_COMPLETED'
    }
}

const filterByActive = () => {
    return {
        type: 'FILTER_BY_ACTIVE'
    }
}

export {
    addTasc,
    removeTasc,
    toggleComplete,
    filterByAll,
    filterByCompleted,
    filterByActive
}