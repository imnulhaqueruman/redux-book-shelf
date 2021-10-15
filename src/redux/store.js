import { createStore,combineReducers } from 'redux';
import bookReducer from './reducer/bookReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const combinedReducer = combineReducers({
    books:bookReducer,
    ///user :userReducer
})

export const store = createStore(combinedReducer,composeWithDevTools())


