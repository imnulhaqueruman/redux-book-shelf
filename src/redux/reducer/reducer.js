import allBooks from '../../fakeData/books.json'
const initialState = {
    readingList:[],
    discoverList:allBooks,
    finishedList:[]
}

const bookReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ADD_TO_READING_LIST':{
               const newState={
                   ...state,
                   readingList:[...state.readingList, action.payLoad]
               }
            return newState;
        }
        case 'REMOVE_FROM_READING_LIST':{
            const newState={
                ...state,
                readingList:state.readingList.filter(b => b.id !== action.payLoad)
            }
            return newState;
        }
        default:{
            return state;
        }
    }
}
export default bookReducer;
