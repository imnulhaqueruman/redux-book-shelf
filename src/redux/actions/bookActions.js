// Action is type of object collection 
// Action helper function to reduce same thing 

export const addToReadingList = (payload) =>{
    return{
        type:'ADD_TO_READING_LIST',
        payload:payload,
    }
}

export const removeFromReadingList = (payload) =>{
    return{
        type:'REMOVE_FROM_READING_LIST',
        payload:payload,
    }
}



