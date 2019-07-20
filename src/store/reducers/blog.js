import {FILTER_POSTS, SET_POSTS} from '../actionTypes/blog'

const initialState = {
    posts: [],
    filteredPosts: [],
    filter: 'all'
};

function blogReducer (state = initialState, action) {
    if (action.type === SET_POSTS) {
        return {...state, posts: action.payload}
    }
    if (action.type === FILTER_POSTS) {
        if(action.payload === 'all' ) {
            return {...state, filteredPosts: [...state.posts], filter: action.payload}
        }
        const filteredPosts = state.posts.filter(post => post.category === action.payload);
        return {...state, filteredPosts: filteredPosts, filter: action.payload}
    }
    return state;
}

export default blogReducer;
