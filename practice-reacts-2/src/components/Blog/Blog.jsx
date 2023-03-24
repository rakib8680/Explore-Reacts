import React from 'react';
import './Blog.css'

const Blog = ({heading , author}) => {
    return (
        <div className='newBlog'>
            <h3>Heading : {heading} </h3>
            <h4>Author : {author}</h4>
        </div>
    );
};

export default Blog;