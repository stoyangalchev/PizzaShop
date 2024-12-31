import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPizzas } from '../../actions/pizzaActions';
import { addToCart } from '../../actions/cartActions';
import useFetchPizzas from "../../admin/adminHooks/useFetchPizzas";
import PizzaModal from "../menu/PizzaModal";

const PizzaMeals = () => {
    const dispatch = useDispatch();
    const [selectedPizza, setSelectedPizza] = useState(null);
    const { pizzas, fetchPizzas } = useFetchPizzas();

    useEffect(() => {
        fetchPizzas();
        dispatch(setPizzas());
    }, [dispatch]);

    const handleOrderPizza = (event, pizza) => {
        event.preventDefault();
        event.stopPropagation(); // Stop the event from propagating to the parent div
        dispatch(addToCart(pizza));
    };

    const openModal = (pizza, event) => {
        event.preventDefault();
        setSelectedPizza(pizza);
    };

    const closeModal = () => setSelectedPizza(null);

    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center" data-aos="fade-up">
                        <h2 className="mb-4">Hot Pizza Meals</h2>
                        <p>
                            Indulge in hot pizza meals, straight from the oven, with crispy crusts, melted cheese, and toppings that burst with flavor.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-wrap">
                <div className="row justify-content-center ml-5">
                    {pizzas.slice(0, 6).map((pizza, index) => (
                        <div
                            className="col-lg-4 d-flex ftco-animate"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            key={pizza._id}
                            onClick={(event) => openModal(pizza, event)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="services-wrap d-flex">
                                <a
                                    href="#"
                                    className="img"
                                    style={{
                                        backgroundImage: `url(${pizza.image})`,
                                        borderRadius: "100px",
                                        width: "150px",
                                        height: "150px",
                                    }}
                                ></a>
                                <div className="text p-4">
                                    <h3>{pizza.name}</h3>
                                    <p>{pizza.description}</p>
                                    <p className="price">
                                        <span>${pizza.price.toFixed(2)}</span>
                                        <a
                                            href="#"
                                            className="ml-2 btn btn-white btn-outline-white"
                                            onClick={(event) => handleOrderPizza(event, pizza)}
                                            style={{ cursor: 'default' }}
                                        >
                                            Order
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedPizza && <PizzaModal pizza={selectedPizza} closeModal={closeModal} />}
        </section>
    );
};

export default React.memo(PizzaMeals);
