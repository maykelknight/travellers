import Client from "../../Contentful";
import {FILTER_POSTS, SET_POSTS} from "../actionTypes/blog";

export const setPosts = (payload) => ({type: SET_POSTS, payload});
export const filterPosts = (payload) => ({type: FILTER_POSTS, payload});

export function fetchPosts () {
    return dispatch => {
        Client.getEntries({content_type: 'travellersBlog'}).then(response => {
            const parsedItems = response.items.map(item => (
                {
                    'category': item.fields.category,
                    'date': item.fields.date.slice(0, 10),
                    'description': item.fields.description,
                    'id': item.fields.id,
                    'photo': 'http:' + item.fields.photo.fields.file.url,
                    'title': item.fields.title
                }
            ));
            dispatch(setPosts(parsedItems));
            dispatch(filterPosts('all'));
        });
    }
}
