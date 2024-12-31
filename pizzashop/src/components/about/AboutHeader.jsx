import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const AboutHeader = () => {
    useEffect(() => {
        // Initialize Owl Carousel
        window.$('.owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
        });
    }, []);

    return (
        <section className="home-slider owl-carousel img" style={{ backgroundImage: "url(images/bg_6.jpg)" }}>
            <div className="slider-item" style={{ backgroundImage: "url(images/bg_6.jpg)", }}>
                <div className="container">
                    <div className="row slider-text justify-content-center align-items-center">
                        <div className="col-md-7 col-sm-12 text-center ftco-animate">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(AboutHeader);