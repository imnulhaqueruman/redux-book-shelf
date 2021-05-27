export const addToReadingList = (payLoad) =>{
    return {
        type:'ADD_TO_READING_LIST',
        payLoad,
    }
}

export const removeFromReadingList = (payLoad) =>{
    return {
        type:'REMOVE_FROM_READING_LIST',
        payLoad,
    }
}
export const addToFinishedList = (payLoad) =>{
    return {
        type:'ADD_TO_FINISHED_LIST',
        payLoad,
    }
}