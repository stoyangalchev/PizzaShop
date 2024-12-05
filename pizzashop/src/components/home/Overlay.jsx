import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const Overlay = () => {
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
                autoplayHoverPause: false,
                nav: true,
                dots: true,
                navText: ['<span class="ion-ios-arrow-back"></span>', '<span class="ion-ios-arrow-forward"></span>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            });

           
            owl.trigger('refresh.owl.carousel');
        }

     
    }, []);

    return (
        <section className="home-slider owl-carousel img" style={{ backgroundImage: "url(images/bg_1.jpg)" }}>
            <div className="slider-item">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row slider-text align-items-center" data-scrollax-parent="true">
                        <div className="col-md-6 col-sm-12 ftco-animate">
                            <span className="subheading">Delicious</span>
                            <h1 className="mb-4">Italian Cuisine</h1>
                            <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div className="col-md-6 ftco-animate">
                            <img src="images/bg_1.png" className="img-fluid" alt="Italian Cuisine" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="slider-item">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row slider-text align-items-center" data-scrollax-parent="true">
                        <div className="col-md-6 col-sm-12 order-md-last ftco-animate">
                            <span className="subheading">Crunchy</span>
                            <h1 className="mb-4">Italian Pizza</h1>
                            <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div className="col-md-6 ftco-animate">
                            <img src="images/bg_2.png" className="img-fluid" alt="Italian Pizza" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="slider-item" style={{ backgroundImage: "url(images/bg_3.jpg)" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                        <div className="col-md-7 col-sm-12 text-center ftco-animate">
                            <span className="subheading">Welcome</span>
                            <h1 className="mb-4">We cooked your desired Pizza Recipe</h1>
                            <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Overlay);