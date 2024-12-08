import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "slide",
        });

    }, []);

    return (

        <footer className="ftco-footer ftco-section img">
            <div className="overlay"></div>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">About Us</h2>
                            <p>
                                Far away from the ordinary, behind the sizzling ovens
                                and hand-tossed dough, lies our story. Born from a love of
                                authentic flavors and crafted with passion.

                            </p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5 social-icons">
                                <li className="ftco-animate" data-aos="fade-up">
                                    <Link to="https://www.twitter.com"><span className="fab fa-twitter"></span></Link>
                                </li>
                                <li className="ftco-animate" data-aos="fade-up">
                                    <Link to="https://www.facebook.com"><span className="fab fa-facebook-f"></span></Link>
                                </li>
                                <li className="ftco-animate" data-aos="fade-up">
                                    <Link to="https://www.instagram.com"><span className="fab fa-instagram"></span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-5 mb-md-5">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Recent Blog</h2>
                            <div className="block-21 mb-4 d-flex">
                                <Link className="blog-img mr-4" style={{ backgroundImage: "url(images/image_1.jpg)" }}></Link>
                                <div className="text">
                                    <h3 className="heading">
                                        <Link to="#">Pasta Italiana</Link>
                                    </h3>
                                    <div className="meta">
                                        <div>
                                            <Link to="#"><span className="fas fa-calendar-alt"></span> Sept 15, 2024</Link>
                                        </div>
                                        <div>
                                            <Link to="#"><span className="fas fa-user"></span> Admin</Link>
                                        </div>
                                        <div>
                                            <Link to="#"><span className="fas fa-comments"></span> 19</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-21 mb-4 d-flex">
                                <Link className="blog-img mr-4" style={{ backgroundImage: "url(images/image_2.jpg)" }}></Link>
                                <div className="text">
                                    <h3 className="heading">
                                        <Link to="#">Spaghetti Mio More</Link>
                                    </h3>
                                    <div className="meta">
                                        <div>
                                            <Link to="#"><span className="fas fa-calendar-alt"></span> Sept 25, 2024</Link>
                                        </div>
                                        <div>
                                            <Link to="#"><span className="fas fa-user"></span> Admin</Link>
                                        </div>
                                        <div>
                                            <Link to="#"><span className="fas fa-comments"></span> 9</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-5 mb-md-5">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2">Services</h2>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#" className="py-2 d-block">Cooked</Link>
                                </li>
                                <li>
                                    <Link to="#" className="py-2 d-block">Deliver</Link>
                                </li>
                                <li>
                                    <Link to="#" className="py-2 d-block">Quality Foods</Link>
                                </li>
                                <li>
                                    <Link to="#" className="py-2 d-block">Mixed</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li>
                                        <Link to="#">
                                            <span className="fas fa-map-marker-alt" style={{ marginRight: '10px' }}></span>
                                            <span className="text">203  St. Mountain View, Sofia, Bulgaria</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="fas fa-phone" style={{ marginRight: '10px' }}></span>
                                            <span className="text">+359 12 34 567</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="fas fa-envelope" style={{ marginRight: '10px' }}></span>
                                            <span className="text">galchev98@gmail.com</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            { }
                            Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made
                            with <i className="fas fa-heart" aria-hidden="true" style={{ marginRight: '5px' }}></i> by{" "}
                            <a  target="_blank">StoYan</a>
                            { }
                        </p>
                    </div>
                </div>
            </div >
        </footer >
    );
};

export default React.memo(AboutUs);