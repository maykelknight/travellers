import React, {useEffect} from 'react';
import BlogPosts from "../components/BlogPosts";
import {useSelector, useDispatch} from "react-redux";
import {fetchPosts} from "../store/actions/blog";

export default function Blog () {

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    const dispatch = useDispatch();
    const posts = useSelector(state => state.blog.posts);

    const postsList = posts.map(post => post.category);

    return (
        <>
            <div className="container">
                <div className="section">
                    <BlogPosts posts={posts}/>
                </div>
            </div>

        </>
    )
}
