import {SET_POSTS} from '../actionTypes/blog'

const initialState = {
    posts: []
};

function blogReducer (state = initialState, action) {
    if (action.type === SET_POSTS) {
        return {...state, posts: action.payload}
    }
    return state;
}

export default blogReducer;
