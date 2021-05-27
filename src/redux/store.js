import { createStore,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bookReducer from "./reducer/reducer";


const combinedReducer = combineReducers({
    books:bookReducer,
})
const store = createStore(combinedReducer,composeWithDevTools())
export default store;
