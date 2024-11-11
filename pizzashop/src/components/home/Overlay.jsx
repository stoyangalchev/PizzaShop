import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Overlay = () => {
    useEffect(() => {
        const element = document.getElementById("myElement");
        if (element) {
            const touchStartHandler = function (e) {
                // Custom logic if needed
            };
            element.addEventListener("touchstart", touchStartHandler, { passive: true });

            // Cleanup function to remove the event listener
            return () => {
                if (element) {
                    element.removeEventListener("touchstart", touchStartHandler);
                }
            };
        }
    }, []);

    return (
        <section
            className="home-slider owl-carousel img"
            style={{ backgroundImage: "url(/images/bg_1.jpg)" }}
        >
            <div className="slider-item">
                <div className="overlay" />
                <div className="container">
                    <div
                        className="row slider-text align-items-center"
                        data-scrollax-parent="true"
                    >
                        <div className="col-md-6 col-sm-12 ftco-animate" id="myElement">
                            <span className="subheading">Delicious</span>
                            <h1 className="mb-4">Italian Cuisine</h1>
                            <p className="mb-4 mb-md-5">
                                A small river named Duden flows by their place and supplies it with
                                the necessary regelialia.
                            </p>
                            <p>
                                <Link to="/order" className="btn btn-primary p-3 px-xl-4 py-xl-3">
                                    Order Now
                                </Link>{" "}
                                <Link
                                    to="/menu"
                                    className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                                >
                                    View Menu
                                </Link>
                            </p>
                        </div>
                        <div className="col-md-6 ftco-animate">
                            <img src="/images/bg_1.png" className="img-fluid" alt="" /> {/* Correct path */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-item">
                <div className="overlay" />
                <div className="container">
                    <div
                        className="row slider-text align-items-center"
                        data-scrollax-parent="true"
                    >
                        <div className="col-md-6 col-sm-12 order-md-last ftco-animate">
                            <span className="subheading">Crunchy</span>
                            <h1 className="mb-4">Italian Pizza</h1>
                            <p className="mb-4 mb-md-5">
                                A small river named Duden flows by their place and supplies it with
                                the necessary regelialia.
                            </p>
                            <p>
                                <Link to="/order" className="btn btn-primary p-3 px-xl-4 py-xl-3">
                                    Order Now
                                </Link>{" "}
                                <Link
                                    to="/menu"
                                    className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                                >
                                    View Menu
                                </Link>
                            </p>
                        </div>
                        <div className="col-md-6 ftco-animate">
                            <img src="/images/bg_2.png" className="img-fluid" alt="" /> {/* Correct path */}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="slider-item"
                style={{ backgroundImage: "url(/images/bg_3.jpg)" }}
            >
                <div className="overlay" />
                <div className="container">
                    <div
                        className="row slider-text justify-content-center align-items-center"
                        data-scrollax-parent="true"
                    >
                        <div className="col-md-7 col-sm-12 text-center ftco-animate">
                            <span className="subheading">Welcome</span>
                            <h1 className="mb-4">We cooked your desired Pizza Recipe</h1>
                            <p className="mb-4 mb-md-5 ml-5 mr-5 ">
                                A small river named Duden flows by their place and supplies it with
                                the necessary regelialia.
                            </p>
                            <p>
                                <Link to="/order" className="btn btn-primary p-3 px-xl-4 py-xl-3">
                                    Order Now
                                </Link>{" "}
                                <Link
                                    to="/menu"
                                    className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                                >
                                    View Menu
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Overlay);