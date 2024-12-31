import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import BlogModal from './BlogModal';

const ReadOurBlog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const blogsPerPage = 3;

    const blogs = [
        { _id: 1, date: 'Sept 10, 2018', admin: 'Admin', comments: 3, title: 'The Delicious Pizza', image: 'images/image_1.jpg', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.' },
        { _id: 2, date: 'Sept 10, 2018', admin: 'Admin', comments: 3, title: 'The Delicious Pizza', image: 'images/image_2.jpg', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.' },
        { _id: 3, date: 'Sept 10, 2018', admin: 'Admin', comments: 3, title: 'The Delicious Pizza', image: 'images/image_3.jpg', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.' },
        { _id: 4, date: 'Sept 10, 2018', admin: 'Admin', comments: 3, title: 'The Delicious Pizza', image: 'images/image_4.jpg', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.' },
        { _id: 5, date: 'Sept 10, 2018', admin: 'Admin', comments: 3, title: 'The Delicious Pizza', image: 'images/image_5.jpg', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.' },
        { _id: 6, date: 'Sept 10, 2018', admin: 'Admin', comments: 3, title: 'The Delicious Pizza', image: 'images/image_6.jpg', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.' },
    ];

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const openModal = (blog) => setSelectedBlog(blog);
    const closeModal = () => setSelectedBlog(null);
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                        <h2 className="mb-4">Read our blog</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <div className="row d-flex">
                    {currentBlogs.map(blog => (
                        < BlogDetails key={blog._id} blog={blog} openModal={openModal} />
                    ))}
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <div className="block-27">
                            <ul>
                                <li><Link to="#" onClick={() => paginate(currentPage - 1)}>&lt;</Link></li>
                                {[...Array(Math.ceil(blogs.length / blogsPerPage)).keys()].map(number => (
                                    <li key={number + 1} className={currentPage === number + 1 ? 'active' : ''}>
                                        <Link to="#" onClick={() => paginate(number + 1)}>{number + 1}</Link>
                                    </li>
                                ))}
                                <li><Link to="#" onClick={() => paginate(currentPage + 1)}>&gt;</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {selectedBlog && <BlogModal blog={selectedBlog} closeModal={closeModal} />}
        </section>
    );
};

export default React.memo(ReadOurBlog);