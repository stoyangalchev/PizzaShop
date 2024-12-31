import React, { useEffect } from "react";
import { CountUp } from "countup.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "/public/css/flaticon.css";
const Status = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "slide",
        });

        const options = {
            duration: 2,
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
        };

        const counters = document.querySelectorAll('.number');
        counters.forEach(counter => {
            const target = counter.getAttribute('data-number');
            const countUp = new CountUp(counter, target, options);
            if (!countUp.error) {
                countUp.start();
            } else {
                console.error(countUp.error);
            }
        });
    }, []);

    return (
        <section
            className="ftco-counter ftco-bg-dark img"
            id="section-counter"
            style={{ backgroundImage: "url(images/bg_2.jpg)" }}
            data-stellar-background-ratio="0.5"
        >
            <div className="overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <div className="icon">
                                            <span className="flaticon-pizza-1"></span>
                                        </div>
                                        <strong className="number" data-number="100">
                                            0
                                        </strong>
                                        <span>Pizza Branches</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <div className="icon">
                                            <span className="flaticon-medal"></span>
                                        </div>
                                        <strong className="number" data-number="85">
                                            0
                                        </strong>
                                        <span>Number of Awards</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <div className="icon">
                                            <span className="flaticon-laugh"></span>
                                        </div>
                                        <strong className="number" data-number="10567">
                                            0
                                        </strong>
                                        <span>Happy Customer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                                <div className="block-18 text-center">
                                    <div className="text">
                                        <div className="icon">
                                            <span className="flaticon-chef"></span>
                                        </div>
                                        <strong className="number" data-number="900">
                                            0
                                        </strong>
                                        <span>Staff</span>
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

export default React.memo(Status);