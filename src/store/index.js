import {applyMiddleware, combineReducers, createStore} from "redux";

import tripsReducer from "./reducers/trips";
import blogReducer from "./reducers/blog";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    trips: tripsReducer,
    blog: blogReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
