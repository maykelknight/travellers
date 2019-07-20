import React from 'react';
import {withRouter} from "react-router-dom";

function Post ({post, history}) {

    function goToPost (id) {
        history.push("/blog/" + id);
    }

    return (
        <div className="blog-post" style={{backgroundImage: "url(" + post.photo + ")"}} onClick={() => goToPost(post.id)}>
            <div className="blog-post__date">
                <i class="fa fa-bookmark"></i>{post ? post.date : ''}
            </div>
            <div className="blog-post__label">
                <span className="blog-post__label__category">{post ? post.category : ''}</span>
                <div className="blog-post__label__title">{post ? post.title : ''}</div>
            </div>
        </div>
    )
}

export default withRouter(Post);
