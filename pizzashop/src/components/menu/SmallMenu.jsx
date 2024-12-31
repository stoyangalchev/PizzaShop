import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setPizzas, setDrinks, setBurgers, setPastas } from '../../actions/pizzaActions';
import { addToCart } from '../../actions/cartActions';
import PizzaModal from './PizzaModal'; // Import the PizzaModal component

import AOS from "aos";
import "aos/dist/aos.css";

const SmallMenu = () => {
    const [activeTab, setActiveTab] = useState("v-pills-1");
    const [selectedItem, setSelectedItem] = useState(null); // State to manage selected item for modal
    const dispatch = useDispatch();
    const pizzas = useSelector((state) => state.pizza.pizzas);
    const drinks = useSelector((state) => state.pizza.drinks);
    const burgers = useSelector((state) => state.pizza.burgers);
    const pastas = useSelector((state) => state.pizza.pastas);

    useEffect(() => {
        dispatch(setPizzas());
        dispatch(setDrinks());
        dispatch(setBurgers());
        dispatch(setPastas());
    }, [dispatch]);

    const handleOrderItem = (event, item) => {
        event.preventDefault();
        dispatch(addToCart(item));
    };

    const handleTabClick = (event, tab) => {
        event.preventDefault();
        setActiveTab(tab);
    };

    const openModal = (item, event) => {
        event.preventDefault();
        setSelectedItem(item);
    };

    const closeModal = () => setSelectedItem(null);

    useEffect(() => {
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
                    <div className="col-lg-4 ftco-animate img f-menu-img mb-5 mb-md-0" style={{ backgroundImage: "url(images/about.jpg)" }}></div>
                    <div className="col-lg-8 ftco-animate p-md-5">
                        <div className="row">
                            <div className="col-md-12 nav-link-wrap mb-5">
                                <div className="nav ftco-animate nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a className={`nav-link ${activeTab === "v-pills-1" ? "active" : ""}`} id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected={activeTab === "v-pills-1"} onClick={(e) => handleTabClick(e, "v-pills-1")}>Pizza</a>
                                    <a className={`nav-link ${activeTab === "v-pills-2" ? "active" : ""}`} id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected={activeTab === "v-pills-2"} onClick={(e) => handleTabClick(e, "v-pills-2")}>Drinks</a>
                                    <a className={`nav-link ${activeTab === "v-pills-3" ? "active" : ""}`} id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected={activeTab === "v-pills-3"} onClick={(e) => handleTabClick(e, "v-pills-3")}>Burgers</a>
                                    <a className={`nav-link ${activeTab === "v-pills-4" ? "active" : ""}`} id="v-pills-4-tab" data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-4" aria-selected={activeTab === "v-pills-4"} onClick={(e) => handleTabClick(e, "v-pills-4")}>Pasta</a>
                                </div>
                            </div>
                            <div className="col-md-12 d-flex align-items-center">
                                <div className="tab-content ftco-animate" id="v-pills-tabContent">
                                    <div className={`tab-pane fade ${activeTab === "v-pills-1" ? "show active" : ""}`} id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
                                        <div className="row">
                                            {pizzas.slice(0, 3).map((pizza) => (
                                                <div className="col-md-4 text-center" key={pizza._id}>
                                                    <div className="menu-wrap">
                                                        <Link to="#" className="menu-img img mb-4" style={{
                                                            backgroundImage: `url(${pizza.image})`, animation: 'zoom 5s infinite'
                                                        }} onClick={(event) => openModal(pizza, event)}></Link>
                                                        <div className="text">
                                                            <h3><Link to="#">{pizza.name}</Link></h3>
                                                            <p>{pizza.description}</p>
                                                            <p className="price"><span>${pizza.price.toFixed(2)}</span></p>
                                                            <p><Link to="#" className="btn btn-white btn-outline-white" onClick={(event) => handleOrderItem(event, pizza)}>Add to cart</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={`tab-pane fade ${activeTab === "v-pills-2" ? "show active" : ""}`} id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
                                        <div className="row">
                                            {drinks.map((drink) => (
                                                <div className="col-md-4 text-center" key={drink._id}>
                                                    <div className="menu-wrap">
                                                        <Link to="#" className="menu-img img mb-4" style={{ backgroundImage: `url(${drink.image})`, animation: 'zoom 5s infinite' }} onClick={(event) => openModal(drink, event)}></Link>
                                                        <div className="text">
                                                            <h3><Link to="#">{drink.name}</Link></h3>
                                                            <p>{drink.description}</p>
                                                            <p className="price"><span>${drink.price.toFixed(2)}</span></p>
                                                            <p><Link to="#" className="btn btn-white btn-outline-white" onClick={(event) => handleOrderItem(event, drink)}>Add to cart</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={`tab-pane fade ${activeTab === "v-pills-3" ? "show active" : ""}`} id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
                                        <div className="row">
                                            {burgers.map((burger) => (
                                                <div className="col-md-4 text-center" key={burger._id}>
                                                    <div className="menu-wrap">
                                                        <Link to="#" className="menu-img img mb-4" style={{ backgroundImage: `url(${burger.image})`, animation: 'zoom 5s infinite' }} onClick={(event) => openModal(burger, event)}></Link>
                                                        <div className="text">
                                                            <h3><Link to="#">{burger.name}</Link></h3>
                                                            <p>{burger.description}</p>
                                                            <p className="price"><span>${burger.price.toFixed(2)}</span></p>
                                                            <p><Link to="#" className="btn btn-white btn-outline-white" onClick={(event) => handleOrderItem(event, burger)}>Add to cart</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={`tab-pane fade ${activeTab === "v-pills-4" ? "show active" : ""}`} id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-4-tab">
                                        <div className="row">
                                            {pastas.map((pasta) => (
                                                <div className="col-md-4 text-center" key={pasta._id}>
                                                    <div className="menu-wrap">
                                                        <Link to="#" className="menu-img img mb-4" style={{ backgroundImage: `url(${pasta.image})`, animation: 'zoom 5s infinite' }} onClick={(event) => openModal(pasta, event)}></Link>
                                                        <div className="text">
                                                            <h3><Link to="#">{pasta.name}</Link></h3>
                                                            <p>{pasta.description}</p>
                                                            <p className="price"><span>${pasta.price.toFixed(2)}</span></p>
                                                            <p><Link to="#" className="btn btn-white btn-outline-white" onClick={(event) => handleOrderItem(event, pasta)}>Add to cart</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selectedItem && <PizzaModal pizza={selectedItem} closeModal={closeModal} />}
        </section>
    );
};

export default React.memo(SmallMenu);