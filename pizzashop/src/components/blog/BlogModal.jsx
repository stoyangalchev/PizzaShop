import React from 'react';

const BlogModal = ({ blog, closeModal }) => {
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h5 className="modal-title">{blog.title}</h5>
                    <button type="button" className="close" onClick={closeModal}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <img src={blog.image} alt={blog.title} className="img-fluid" />
                    <p><strong>Date:</strong> {blog.date}</p>
                    <p>{blog.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;