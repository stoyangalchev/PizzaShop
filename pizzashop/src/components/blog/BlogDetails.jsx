import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetails = ({ blog, openModal }) => {
    if (!blog || !blog.image) {
        return <div>Loading...</div>;
    }

    return (
        <div className="col-md-4 d-flex ftco-animate" key={blog.id}>
            <div className="blog-entry align-self-stretch">
                <Link to="#" className="block-20" style={{ backgroundImage: `url(${blog.image})` }} onClick={() => openModal(blog)}>
                </Link>
                <div className="text py-4 d-block">
                    <div className="meta">
                        <div><Link to="#">{blog.date}</Link></div>
                        <div><Link to="#">{blog.admin}</Link></div>
                        <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> {blog.comments}</Link></div>
                    </div>
                    <h3 className="heading mt-2"><Link to="#" onClick={() => openModal(blog)}>{blog.title}</Link></h3>
                    <p>{blog.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;