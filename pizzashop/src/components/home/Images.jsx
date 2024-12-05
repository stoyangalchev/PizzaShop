import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const Images = () => {
   

    return (
        <section className="ftco-gallery">
            <div className="container-wrap">
                <div className="row no-gutters">
                    <div className="col-md-3 ftco-animate" data-aos="fade-up">
                        <Link to="#" className="gallery img d-flex align-items-center" style={{ backgroundImage: "url(images/gallery-1.jpg)" }}>
                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                <span className="fas fa-search"></span> {}
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 ftco-animate" data-aos="fade-up" data-aos-delay="100">
                        <Link to="#" className="gallery img d-flex align-items-center" style={{ backgroundImage: "url(images/gallery-2.jpg)" }}>
                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                <span className="fas fa-search"></span> {}
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 ftco-animate" data-aos="fade-up" data-aos-delay="200">
                        <Link to="#" className="gallery img d-flex align-items-center" style={{ backgroundImage: "url(images/gallery-3.jpg)" }}>
                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                <span className="fas fa-search"></span> {}
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 ftco-animate" data-aos="fade-up" data-aos-delay="300">
                        <Link to="#" className="gallery img d-flex align-items-center" style={{ backgroundImage: "url(images/gallery-4.jpg)" }}>
                            <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                <span className="fas fa-search"></span> {}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Images);