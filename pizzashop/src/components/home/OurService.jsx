import React from "react";

const OurService = () => (
    <section className="ftco-section ftco-services">
        <div className="overlay"></div>
        <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
                <div className="col-md-7 heading-section ftco-animate text-center" data-aos="fade-up">
                    <h2 className="mb-4">Our Services</h2>
                    <p>Freshly baked pizzas, customized your way, delivered fast — your cravings, our passion!</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 ftco-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="media d-block text-center block-6 services">
                        <div className="icon d-flex justify-content-center align-items-center mb-5">
                            <i className="fas fa-apple-alt"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="heading">Healthy Foods</h3>
                            <p>Healthy foods crafted with care, featuring fresh ingredients, balanced flavors, quick delivery, and options for every lifestyle and taste.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ftco-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="media d-block text-center block-6 services">
                        <div className="icon d-flex justify-content-center align-items-center mb-5">
                            <i className="fas fa-bicycle"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="heading">Fastest Delivery</h3>
                            <p>Experience the fastest delivery of delicious meals, fresh ingredients, bold flavors, and unbeatable convenience, right to your doorstep.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ftco-animate" data-aos="fade-up" data-aos-delay="300">
                    <div className="media d-block text-center block-6 services">
                        <div className="icon d-flex justify-content-center align-items-center mb-5">
                            <i className="fas fa-pizza-slice"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="heading">Original Recipes</h3>
                            <p>Enjoy unique, original recipes made from fresh ingredients, packed with flavor, and brought to your table in no time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(OurService);