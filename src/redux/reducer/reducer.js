import allBooks from '../../fakeData/books.json'
const initialState = {
    readingList:[],
    discoverList:allBooks,
    finishedList:[]
}

const bookReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ADD_TO_READING_LIST':{
            const checkRepeatBook = state.readingList.find(book =>book.id === action.payLoad.id )
               const newState={
                   ...state,
              
                   readingList:checkRepeatBook? (alert('already added'),[...state.readingList]):[...state.readingList, action.payLoad]
               }
            return newState;
        }
        case 'REMOVE_FROM_READING_LIST':{
            const newState={
                ...state,
                readingList:state.readingList.filter(b => b.id !== action.payLoad.id)
            }
            return newState;
        }
        case 'ADD_TO_FINISHED_LIST':{
            const checkRepeatBook = state.finishedList.find(book =>book.id === action.payLoad.id )
            const newState={
                ...state,
                readingList:state.readingList.filter(b => b.id !== action.payLoad.id),
                finishedList:checkRepeatBook? (alert('already added'),[...state.finishedList]):[...state.finishedList, action.payLoad]
            }
            return newState
        }
        default:{
            return state;
        }
    }
}
export default bookReducer;
