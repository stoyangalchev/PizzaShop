import React, { useEffect } from "react";



const PizzaMeals = () => {


    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center" data-aos="fade-up">
                        <h2 className="mb-4">Hot Pizza Meals</h2>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                            blind texts.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-wrap">
                <div className="row no-gutters d-flex">
                    <div className="col-lg-4 d-flex ftco-animate" data-aos="fade-up">
                        <div className="services-wrap d-flex">
                            <a href="#" className="img" style={{ backgroundImage: "url(images/pizza-1.jpg)" }}></a>
                            <div className="text p-4">
                                <h3>Italian Pizza</h3>
                                <p>
                                    "Classic Italian pizza: wood-fired, rich tomato sauce, creamy mozzarella."
                                </p>
                                <p className="price">
                                    <span>$12.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex ftco-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="services-wrap d-flex">
                            <a href="#" className="img" style={{ backgroundImage: "url(images/pizza-2.jpg)" }}></a>
                            <div className="text p-4">
                                <h3>Greek Pizza</h3>
                                <p>
                                    "Greek pizza: thick, chewy crust, tangy feta, Mediterranean herbs, vibrant toppings."
                                </p>
                                <p className="price">
                                    <span>$13.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex ftco-animate" data-aos="fade-up" data-aos-delay="200">
                        <div className="services-wrap d-flex">
                            <a href="#" className="img" style={{ backgroundImage: "url(images/pizza-3.jpg)" }}></a>
                            <div className="text p-4">
                                <h3>Caucasian Pizza</h3>
                                <p>
                                    "Caucasian pizza: soft, airy crust, rich cheese blend, savory meat toppings."
                                </p>
                                <p className="price">
                                    <span>$11.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 d-flex ftco-animate" data-aos="fade-up" data-aos-delay="300">
                        <div className="services-wrap d-flex">
                            <a href="#" className="img order-lg-last" style={{ backgroundImage: "url(images/pizza-4.jpg)" }}></a>
                            <div className="text p-4">
                                <h3>American Pizza</h3>
                                <p>
                                    "American pizza: thick crust, loaded cheese, bold toppings, hearty flavor."
                                </p>
                                <p className="price">
                                    <span>$14.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex ftco-animate" data-aos="fade-up" data-aos-delay="400">
                        <div className="services-wrap d-flex">
                            <a href="#" className="img order-lg-last" style={{ backgroundImage: "url(images/pizza-5.jpg)" }}></a>
                            <div className="text p-4">
                                <h3>Tomatoe Pie</h3>
                                <p>
                                    "Tomato pie: focaccia-like crust, thick tomato sauce, light cheese sprinkle."                                </p>
                                <p className="price">
                                    <span>$10.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex ftco-animate" data-aos="fade-up" data-aos-delay="500">
                        <div className="services-wrap d-flex">
                            <a href="#" className="img order-lg-last" style={{ backgroundImage: "url(images/pizza-6.jpg)" }}></a>
                            <div className="text p-4">
                                <h3>Margherita</h3>
                                <p>

                                    "Margherita: thin crust, fresh mozzarella, vibrant tomatoes, fragrant basil."
                                </p>
                                <p className="price">
                                    <span>$9.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                    <div className="col-md-7 heading-section text-center ftco-animate" data-aos="fade-up">
                        <h2 className="mb-4">Our Menu Pricing</h2>
                        <p className="flip">
                            <span className="deg1"></span><span className="deg2"></span><span className="deg3"></span>
                        </p>
                        <p className="mt-5">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                            blind texts.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="pricing-entry d-flex ftco-animate" data-aos="fade-up">
                            <div className="img" style={{ backgroundImage: "url(images/pizza-1.jpg)" }}></div>
                            <div className="desc pl-3">
                                <div className="d-flex text align-items-center">
                                    <h3><span>Italian Pizza</span></h3>
                                    <span className="price">$12.90</span>
                                </div>
                                <div className="d-block">
                                    <p>"Italian pizza: thin, crispy crust, fresh ingredients, rich tomato sauce, aromatic basil."</p>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-entry d-flex ftco-animate" data-aos="fade-up" data-aos-delay="100">
                            <div className="img" style={{ backgroundImage: "url(images/pizza-2.jpg)" }}></div>
                            <div className="desc pl-3">
                                <div className="d-flex text align-items-center">
                                    <h3><span>Hawaiian Pizza</span></h3>
                                    <span className="price">$13.00</span>
                                </div>
                                <div className="d-block">
                                    <p>"Hawaiian pizza: sweet pineapple, savory ham, melted cheese, tangy tomato sauce."</p>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-entry d-flex ftco-animate" data-aos="fade-up" data-aos-delay="200">
                            <div className="img" style={{ backgroundImage: "url(images/pizza-3.jpg)" }}></div>
                            <div className="desc pl-3">
                                <div className="d-flex text align-items-center">
                                    <h3><span>Greek Pizza</span></h3>
                                    <span className="price">$13.90</span>
                                </div>
                                <div className="d-block">
                                    <p>
                                        "Greek pizza: thick, chewy crust, tangy feta, Mediterranean herbs, vibrant toppings."</p>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-entry d-flex ftco-animate" data-aos="fade-up" data-aos-delay="300">
                            <div className="img" style={{ backgroundImage: "url(images/pizza-4.jpg)" }}></div>
                            <div className="desc pl-3">
                                <div className="d-flex text align-items-center">
                                    <h3><span>Bacon Crispy Thins</span></h3>
                                    <span className="price">$12.90</span>
                                </div>
                                <div className="d-block">
                                    <p>"Bacon crispy thins: crunchy, thin crust, smoky bacon, savory seasoning."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="pricing-entry d-flex ftco-animate" data-aos="fade-up" data-aos-delay="400">
                            <div className="img" style={{ backgroundImage: "url(images/pizza-5.jpg)" }}></div>
                            <div className="desc pl-3">
                                <div className="d-flex text align-items-center">
                                    <h3><span>Hawaiian Special</span></h3>
                                    <span className="price">$16.90</span>
                                </div>
                                <div className="d-block">
                                    <p>
                                        "Hawaiian Special: sweet pineapple, savory ham, smoky bacon, melted cheese."</p>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-entry d-flex ftco-animate" data-aos="fade-up" data-aos-delay="500">
                            <div className="img" style={{ backgroundImage: "url(images/pizza-6.jpg)" }}></div>
                            <div className="desc pl-3">
                                <div className="d-flex text align-items-center">
                                    <h3><span>Ultimate Overload</span></h3>
                                    <span className="price">$18.00</span>
                                </div>
                                <div className="d-block">
                                    <p>"Ultimate Overload: loaded with pepperoni, sausage, bacon, cheese, and fresh veggies."</p>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-entry d-flex ftco-animate" data-aos="fade-up" data-aos-delay="600">
                            <div className="img" style={{ backgroundImage: "url(images/pizza-7.jpg)" }}></div>
                            <div className="desc pl-3">
                                <div className="d-flex text align-items-center">
                                    <h3><span>Bacon Pizza</span></h3>
                                    <span className="price">$20.00</span>
                                </div>
                                <div className="d-block">
                                    <p>"Bacon pizza: crispy bacon, melted cheese, savory tomato sauce, flavorful crust."</p>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-entry d-flex ftco-animate" data-aos="fade-up" data-aos-delay="700">
                            <div className="img" style={{ backgroundImage: "url(images/pizza-8.jpg)" }}></div>
                            <div className="desc pl-3">
                                <div className="d-flex text align-items-center">
                                    <h3><span>Ham & Pineapple</span></h3>
                                    <span className="price">$18.00</span>
                                </div>
                                <div className="d-block">
                                    <p>"Ham & Pineapple: savory ham, sweet pineapple, melted cheese, tangy tomato sauce."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default React.memo(PizzaMeals);