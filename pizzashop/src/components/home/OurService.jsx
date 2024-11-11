import React from "react";

const OurService = () => (
    <section className="ftco-section ftco-services">
        <div className="overlay"></div>
        <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
                <div className="col-md-7 heading-section ftco-animate text-center" data-aos="fade-up">
                    <h2 className="mb-4">Our Services</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 ftco-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="media d-block text-center block-6 services">
                        <div className="icon d-flex justify-content-center align-items-center mb-5">
                            <span className="flaticon-diet"></span>
                        </div>
                        <div className="media-body">
                            <h3 className="heading">Healthy Foods</h3>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                                unorthographic.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ftco-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="media d-block text-center block-6 services">
                        <div className="icon d-flex justify-content-center align-items-center mb-5">
                            <span className="flaticon-bicycle"></span>
                        </div>
                        <div className="media-body">
                            <h3 className="heading">Fastest Delivery</h3>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                                unorthographic.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ftco-animate" data-aos="fade-up" data-aos-delay="300">
                    <div className="media d-block text-center block-6 services">
                        <div className="icon d-flex justify-content-center align-items-center mb-5">
                            <span className="flaticon-pizza-1"></span>
                        </div>
                        <div className="media-body">
                            <h3 className="heading">Original Recipes</h3>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                                unorthographic.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(OurService);