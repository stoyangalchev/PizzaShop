import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogDetails from '../blog/BlogDetails';
import BlogModal from '../blog/BlogModal';

import "aos/dist/aos.css";

const Blog = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const blogs = [
        { _id: 1, date: 'Sept 10, 2018',   title: 'The Delicious Pizza', image: 'images/image_1.jpg', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.' },
        { _id: 2, date: 'Sept 10, 2018',   title: 'The Delicious Pizza', image: 'images/image_2.jpg', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.' },
        { _id: 3, date: 'Sept 10, 2018',   title: 'The Delicious Pizza', image: 'images/image_3.jpg', description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.' },

    ];

    const openModal = (blog) => setSelectedBlog(blog);
    const closeModal = () => setSelectedBlog(null);
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center" data-aos="fade-up">
                        <h2 className=" mb-4">Recent from blog</h2>
                        <p>
                            Indulge in our delicious, handcrafted pizzas made with the
                            finest ingredients. Each pizza is baked to perfection,
                            featuring a crispy crust, rich tomato sauce, and a variety of fresh, high-quality toppings.
                        </p>
                    </div>
                </div>
                <div className="row d-flex">
                    {blogs.map(blog => (
                        < BlogDetails key={blog._id} blog={blog} openModal={openModal} />
                    ))}
                </div>
            </div>
            {selectedBlog && <BlogModal blog={selectedBlog} closeModal={closeModal} />}
        </section>
    );
};

export default React.memo(Blog);