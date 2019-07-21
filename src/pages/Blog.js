import React, {useEffect} from 'react';
import BlogPosts from "../components/BlogPosts";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, filterPosts} from "../store/actions/blog";

export default function Blog () {

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    const dispatch = useDispatch();
    const posts = useSelector(state => state.blog.posts);
    const filteredPosts = useSelector(state => state.blog.filteredPosts);
    const filter = useSelector(state => state.blog.filter);

    const categories = [...new Set(posts.map(post => post.category))];
    categories.unshift('all');

    const categoriesList =
        <ul className="blog-categories">
            {categories.map(category => <li className={"blog-categories__category" + (category === filter ? ' -active' : '')} onClick={() => selectCategory(category)}>{category}</li>)}
        </ul>
    ;

    function selectCategory (category) {
        dispatch(filterPosts(category))
    }

    return (
        <>
            <div className="container blog-page">
                <div>
                    {categoriesList}
                </div>
                <div>
                    <BlogPosts posts={filteredPosts}/>
                </div>
            </div>
        </>
    )
}
