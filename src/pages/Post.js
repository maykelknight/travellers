import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../store/actions/blog";

export default function Post (props) {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.blog.posts);

    const {match: {params}} = props;
    const post = posts.find(post => post.id.toString() === params.id.toString());

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    if (post) {
        return (

            <div className="post-page">
                <div className="post-page__banner" style={{backgroundImage: "url(" + post.photo + ")"}}/>
                <div className="section post-page__description">
                    <p className="post-page__description__date">Published: {post.date}</p>

                    <h2 className="is-size-3 label-with-line post-page__description__title">{post.title}</h2>

                    <p className="post-page__description__text">{post.description}</p>
                    <p className="post-page__description__text mt20">{post.description}</p>
                    <p className="post-page__description__text mt20">{post.description}</p>


                </div>
            </div>
        )
    }
    return <p>We didnt found such post</p>

}
