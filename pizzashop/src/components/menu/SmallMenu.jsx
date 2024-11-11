import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SmallMenu = () => {
    const [activeTab, setActiveTab] = useState("v-pills-1");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    useEffect(() => {
        // Initialize AOS only once
        if (!AOS.initialized) {
            AOS.init({
                duration: 800,
                easing: "slide",
            });
            AOS.initialized = true;
        }
    }, []);

    return (
        <section className="ftco-menu">
            <div className="container-fluid">
                <div className="row d-md-flex">
                    <div
                        className="col-lg-4 ftco-animate img f-menu-img mb-5 mb-md-0"
                        style={{ backgroundImage: "url(images/about.jpg)" }}
                    ></div>
                    <div className="col-lg-8 ftco-animate p-md-5">
                        <div className="row">
                            <div className="col-md-12 nav-link-wrap mb-5">
                                <div
                                    className="nav ftco-animate nav-pills"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <a
                                        className={`nav-link ${activeTab === "v-pills-1" ? "active" : ""}`}
                                        id="v-pills-1-tab"
                                        data-toggle="pill"
                                        href="#v-pills-1"
                                        role="tab"
                                        aria-controls="v-pills-1"
                                        aria-selected={activeTab === "v-pills-1"}
                                        onClick={() => handleTabClick("v-pills-1")}
                                    >
                                        Pizza
                                    </a>

                                    <a
                                        className={`nav-link ${activeTab === "v-pills-2" ? "active" : ""}`}
                                        id="v-pills-2-tab"
                                        data-toggle="pill"
                                        href="#v-pills-2"
                                        role="tab"
                                        aria-controls="v-pills-2"
                                        aria-selected={activeTab === "v-pills-2"}
                                        onClick={() => handleTabClick("v-pills-2")}
                                    >
                                        Drinks
                                    </a>

                                    <a
                                        className={`nav-link ${activeTab === "v-pills-3" ? "active" : ""}`}
                                        id="v-pills-3-tab"
                                        data-toggle="pill"
                                        href="#v-pills-3"
                                        role="tab"
                                        aria-controls="v-pills-3"
                                        aria-selected={activeTab === "v-pills-3"}
                                        onClick={() => handleTabClick("v-pills-3")}
                                    >
                                        Burgers
                                    </a>

                                    <a
                                        className={`nav-link ${activeTab === "v-pills-4" ? "active" : ""}`}
                                        id="v-pills-4-tab"
                                        data-toggle="pill"
                                        href="#v-pills-4"
                                        role="tab"
                                        aria-controls="v-pills-4"
                                        aria-selected={activeTab === "v-pills-4"}
                                        onClick={() => handleTabClick("v-pills-4")}
                                    >
                                        Pasta
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-12 d-flex align-items-center">
                                <div className="tab-content ftco-animate" id="v-pills-tabContent">
                                    <div
                                        className={`tab-pane fade ${activeTab === "v-pills-1" ? "show active" : ""}`}
                                        id="v-pills-1"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-1-tab"
                                    >
                                        <div className="row">
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <Link
                                                        to="#"
                                                        className="menu-img img mb-4"
                                                        style={{ backgroundImage: "url(images/pizza-1.jpg)" }}
                                                    ></Link>
                                                    <div className="text">
                                                        <h3>
                                                            <Link to="#">Italian Pizza</Link>
                                                        </h3>
                                                        <p>
                                                            Classic Italian pizza: wood-fired, rich tomato sauce, creamy mozzarella.
                                                        </p>
                                                        <p className="price">
                                                            <span>$12.90</span>
                                                        </p>
                                                        <p>
                                                            <Link to="#" className="btn btn-white btn-outline-white">
                                                                Add to cart
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <Link
                                                        to="#"
                                                        className="menu-img img mb-4"
                                                        style={{ backgroundImage: "url(images/pizza-2.jpg)" }}
                                                    ></Link>
                                                    <div className="text">
                                                        <h3>
                                                            <Link to="#">Greek Pizza</Link>
                                                        </h3>
                                                        <p>
                                                            Greek pizza: thick, chewy crust, tangy feta, Mediterranean herbs, vibrant toppings.
                                                        </p>
                                                        <p className="price">
                                                            <span>$13.90</span>
                                                        </p>
                                                        <p>
                                                            <Link to="#" className="btn btn-white btn-outline-white">
                                                                Add to cart
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <Link
                                                        to="#"
                                                        className="menu-img img mb-4"
                                                        style={{ backgroundImage: "url(images/pizza-3.jpg)" }}
                                                    ></Link>
                                                    <div className="text">
                                                        <h3>
                                                            <Link to="#">Caucasian Pizza</Link>
                                                        </h3>
                                                        <p>
                                                            Caucasian pizza: soft, airy crust, rich cheese blend, savory meat toppings.
                                                        </p>
                                                        <p className="price">
                                                            <span>$11.90</span>
                                                        </p>
                                                        <p>
                                                            <Link to="#" className="btn btn-white btn-outline-white">
                                                                Add to cart
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`tab-pane fade ${activeTab === "v-pills-2" ? "show active" : ""}`}
                                        id="v-pills-2"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-2-tab"
                                    >
                                        <div className="row">
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <Link
                                                        to="#"
                                                        className="menu-img img mb-4"
                                                        style={{ backgroundImage: "url(images/drink-1.jpg)" }}
                                                    ></Link>
                                                    <div className="text">
                                                        <h3>
                                                            <Link to="#">Lemonade Juice</Link>
                                                        </h3>
                                                        <p>
                                                            Refreshing lemonade juice, made from freshly squeezed lemons, perfect for quenching your thirst on a sunny day.
                                                        </p>
                                                        <p className="price">
                                                            <span>$8.90</span>
                                                        </p>
                                                        <p>
                                                            <Link to="#" className="btn btn-white btn-outline-white">
                                                                Add to cart
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <Link
                                                        to="#"
                                                        className="menu-img img mb-4"
                                                        style={{ backgroundImage: "url(images/drink-2.jpg)" }}
                                                    ></Link>
                                                    <div className="text">
                                                        <h3>
                                                            <Link to="#">Raspberry drink</Link>
                                                        </h3>
                                                        <p>
                                                            Vibrant raspberry drink, sweet and slightly tart, bursting with berry flavor, perfect for refreshing moments.
                                                        </p>
                                                        <p className="price">
                                                            <span>$7.90</span>
                                                        </p>
                                                        <p>
                                                            <Link to="#" className="btn btn-white btn-outline-white">
                                                                Add to cart
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <Link
                                                        to="#"
                                                        className="menu-img img mb-4"
                                                        style={{ backgroundImage: "url(images/drink-3.jpg)" }}
                                                    ></Link>
                                                    <div className="text">
                                                        <h3>
                                                            <Link to="#">Cocktail</Link>
                                                        </h3>
                                                        <p>
                                                            Refreshing cocktail blend of tropical fruits and spirits, vibrant, smooth, and perfect for unwinding moments.
                                                        </p>
                                                        <p className="price">
                                                            <span>$8.90</span>
                                                        </p>
                                                        <p>
                                                            <Link to="#" className="btn btn-white btn-outline-white">
                                                                Add to cart
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`tab-pane fade ${activeTab === "v-pills-3" ? "show active" : ""}`}
                                        id="v-pills-3"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-3-tab"
                                    >
                                        <div className="row">
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <Link
                                                        to="#"
                                                        className="menu-img img mb-4"
                                                        style={{ backgroundImage: "url(images/burger-1.jpg)" }}
                                                    ></Link>
                                                    <div className="text">
                                                        <h3>
                                                            <Link to="#">Small Burger</Link>
                                                        </h3>
                                                        <p>
                                                            Mini burger with soft bun, fresh veggies, melted cheese, juicy and full of flavor.
                                                        </p>
                                                        <p className="price">
                                                            <span>$8.90</span>
                                                        </p>
                                                        <p>
                                                            <Link to="#" className="btn btn-white btn-outline-white">
                                                                Add to cart
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <Link
                                                        to="#"
                                                        className="menu-img img mb-4"
                                                        style={{ backgroundImage: "url(images/burger-2.jpg)" }}
                                                    ></Link>
                                                    <div className="text">
                                                        <h3>
                                                            <Link to="#">Middle Burger</Link>
                                                        </h3>
                                                        <p>
                                                            Tasty mid-size burger with soft bun, juicy beef, crisp veggies, rich cheese—a perfect bite.
                                                        </p>
                                                        <p className="price">
                                                            <span>$10.90</span>
                                                        </p>
                                                        <p>
                                                            <Link to="#" className="btn btn-white btn-outline-white">
                                                                Add to cart
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <Link
                                                        to="#"
                                                        className="menu-img img mb-4"
                                                        style={{ backgroundImage: "url(images/burger-3.jpg)" }}
                                                    ></Link>
                                                    <div className="text">
                                                        <h3>
                                                            <Link to="#">Big Burger</Link>
                                                        </h3>
                                                        <p>
                                                            Large burger with thick patty, fresh veggies, melted cheese, all in a soft, toasted bun.
                                                        </p>
                                                        <p className="price">
                                                            <span>$2.90</span>
                                                        </p>
                                                        <p>
                                                            <Link to="#" className="btn btn-white btn-outline-white">
                                                                Add to cart
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`tab-pane fade ${activeTab === "v-pills-4" ? "show active" : ""}`}
                                        id="v-pills-4"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-4-tab"
                                    >
                                        <div className="row">
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <Link
                                                        to="#"
                                                        className="menu-img img mb-4"
                                                        style={{ backgroundImage: "url(images/pasta-1.jpg)" }}
                                                    ></Link>
                                                    <div className="text">
                                                        <h3>
                                                            <Link to="#">Italiniti</Link>
                                                        </h3>
                                                        <p>
                                                            Delicious pasta with rich sauce, fresh ingredients, and perfect seasoning.
                                                        </p>
                                                        <p className="price">
                                                            <span>$12.90</span>
                                                        </p>
                                                        <p>
                                                            <Link to="#" className="btn btn-white btn-outline-white">
                                                                Add to cart
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <Link
                                                        to="#"
                                                        className="menu-img img mb-4"
                                                        style={{ backgroundImage: "url(images/pasta-2.jpg)" }}
                                                    ></Link>
                                                    <div className="text">
                                                        <h3>
                                                            <Link to="#">Italincia</Link>
                                                        </h3>
                                                        <p>
                                                            Savory pasta with creamy sauce, tender noodles, and aromatic herbs.
                                                        </p>
                                                        <p className="price">
                                                            <span>$10.90</span>
                                                        </p>
                                                        <p>
                                                            <Link to="#" className="btn btn-white btn-outline-white">
                                                                Add to cart
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="menu-wrap">
                                                    <Link
                                                        to="#"
                                                        className="menu-img img mb-4"
                                                        style={{ backgroundImage: "url(images/pasta-3.jpg)" }}
                                                    ></Link>
                                                    <div className="text">
                                                        <h3>
                                                            <Link to="#">Italiochela</Link>
                                                        </h3>
                                                        <p>
                                                            Flavorful pasta served with a zesty sauce and savory toppings.
                                                        </p>
                                                        <p className="price">
                                                            <span>$11.90</span>
                                                        </p>
                                                        <p>
                                                            <Link to="#" className="btn btn-white btn-outline-white">
                                                                Add to cart
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(SmallMenu);