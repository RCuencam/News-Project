import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import newsReducer from "../reducers/newsReducer";

const reducers = combineReducers({
    news: newsReducer
})

const store = createStore( 
    reducers, 
    composeWithDevTools( applyMiddleware(thunk) )
);

export default store;