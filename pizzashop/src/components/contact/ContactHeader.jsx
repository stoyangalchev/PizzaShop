import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


const ContactHeader = () => {
    useEffect(() => {


        // Initialize Owl Carousel
        const $ = window.jQuery;
        if ($ && $.fn.owlCarousel) {
            const owl = $('.home-slider');
            owl.owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                nav: true,
                dots: true,
                navText: ['<span class="ion-ios-arrow-back"></span>', '<span class="ion-ios-arrow-forward"></span>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            });

            // Reinitialize Owl Carousel on route change
            owl.trigger('refresh.owl.carousel');
        }

        return () => {
            

            if ($ && $.fn.owlCarousel) {
                $('.home-slider').trigger('destroy.owl.carousel');
            }
        };
    }, []);
    return (
        <section className="home-slider owl-carousel img" style={{ backgroundImage: "url(images/bg_8.jpg)" }}>
            <div className="slider-item" style={{ backgroundImage: "url(images/bg_8.jpg)", opacity: 9 }}>

                <div className="container " >
                    <div className="row slider-text justify-content-center align-items-center ">
                        <div className="col-md-7 col-sm-12 text-center ftco-animate">
                            <h1 className="mb-3 mt-5 bread" style={{ fontSize: "4rem" }}>Contact Us</h1>
                            <p className="breadcrumbs">
                                <span className="mr-2 ">
                                    <Link to="/">Home</Link>
                                </span>
                               

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(ContactHeader);

