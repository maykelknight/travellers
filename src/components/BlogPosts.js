import React from 'react';
import Post from "./Post";

export default function BlogPosts ({posts}) {

    const mainPosts = posts.splice(1, 2);
    const mainPostsList = mainPosts.map(post => <Post post={post}/>);
    const restOfPosts = posts.map(post => <Post post={post}/>);

    return (
        <div className="blog-posts">

            <div className="blog-posts__row">
                {mainPostsList}
            </div>

            <div className="blog-posts__row">
                {restOfPosts}
            </div>

        </div>
    )
}
