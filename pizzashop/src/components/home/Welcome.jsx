import React from "react";

const Welcome = () => (
    <section className="ftco-about d-md-flex">
        <div data-aos="fade-up" className="one-half img" style={{ backgroundImage: 'url(images/about.jpg)' }}></div>
        <div className="one-half ftco-animate">
            <div className="heading-section ftco-animate">
                <h2 className="mb-4">Welcome to <span className="flaticon-pizza">Pizza Shop</span> </h2>
            </div>
            <div >
                <p>
                    On your way to pizza perfection, you’ll discover fresh, flavorful ingredients, classic and unique toppings,
                    and a passion for crafting unforgettable pizzas.
                    Our chefs blend tradition with a touch of creativity,
                    bringing you both beloved classics and bold new flavors.
                    Each pizza is made to order with care, from the first sprinkle of cheese to the last golden crust.
                </p>
            </div>
        </div>
    </section>
)
export default React.memo(Welcome);