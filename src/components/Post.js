import React from 'react';
import styled from 'styled-components';

export default function Post ({post}) {
    return (
        <div className="blog-post"  style={{ backgroundImage: "url(" + post.photo + ")" }}>
            {/*{post ? post.photo : ''}*/}

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
