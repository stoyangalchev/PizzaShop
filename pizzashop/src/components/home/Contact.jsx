import React from "react";
import { Link } from "react-router-dom";
import '/public/css/style.css';
const Contact = () => {

    
    return (
        <section className="ftco-intro">
            <div className="container-wrap">
                <div className="wrap d-md-flex">
                    <div className="info">
                        <div className="row no-gutters">
                            <div className="col-md-4 d-flex ftco-animate" data-aos="fade-up">
                                <div className="icon"><span className="fas fa-phone"></span></div>
                                <div className="text">
                                    <h3>000 (123) 456 7890</h3>
                                    <p>Phone </p>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex ftco-animate" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><span className="fas fa-map-marker-alt"></span></div>
                                <div className="text">
                                    <h3>198 West 21th Street</h3>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex ftco-animate" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon"><span className="fas fa-clock"></span></div>
                                <div className="text">
                                    <h3>Open Monday-Friday</h3>
                                    <p>10:00am - 7:00pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social d-md-flex pl-md-5 p-4 align-items-center">
                        <ul className="social-icon">
                            <li className="ftco-animate"><a href="https://www.twitter.com"><span className="fab fa-twitter"></span></a></li>
                            <li className="ftco-animate"><a href="https://www.facebook.com/"><span className="fab fa-facebook-f"></span></a></li>
                            <li className="ftco-animate"><a href="https://www.instagram.com"><span className="fab fa-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default React.memo(Contact);