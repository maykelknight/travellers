import React from 'react';
import Post from "./Post";

export default function BlogPosts ({posts}) {

    const categories = [...new Set(posts.map(post=> post.category))]
    const categoriesList =
        <ul>
            {categories.map(category => <li>{category}</li>)}
        </ul>
    ;

    const mainPosts = posts.splice(1,2);
    const mainPostsList = mainPosts.map(post => <Post post={post}/>);
    const restOfPosts = posts.map(post => <Post post={post}/>);

    return (
        <div className="blog-posts">

            <div>{categoriesList}</div>

            <div className="blog-posts__row">
                {mainPostsList}
            </div>

            <div className="blog-posts__row">
                {restOfPosts}
            </div>

        </div>
    )
}
