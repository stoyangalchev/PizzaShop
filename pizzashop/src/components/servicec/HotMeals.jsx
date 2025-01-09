import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setPizzas } from '../../actions/pizzaActions';
import { addToCart } from '../../actions/cartActions';
import useFetchPizzas from "../../admin/adminHooks/useFetchPizzas";
import AOS from "aos";
import "aos/dist/aos.css";

const HotMeals = () => {
    const dispatch = useDispatch();

    const { pizzas, fetchPizzas } = useFetchPizzas();


    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "slide",
        });
        fetchPizzas();
        dispatch(setPizzas());
    }, [dispatch]);

    const handleOrderPizza = (event, pizza) => {
        event.preventDefault();
        dispatch(addToCart(pizza));
    };
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                        <h2 className="mb-4">Hot Meals</h2>
                        <p className="flip">
                            <span className="deg1"></span>
                            <span className="deg2"></span>
                            <span className="deg3"></span>
                        </p>
                        <p className="mt-5">
                            Far, far away, beyond the golden crust fields, nestled among the savory valleys of cheese, there lies the kingdom of Pizza. In this enchanted land, fresh dough is carefully kneaded and topped with the finest ingredients.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center ">
                    {pizzas.slice(0, 6).map((pizza, index) => (
                        <div className="col-md-3 text-center ftco-animate" key={pizza._id}>
                            <div className="menu-wrap">
                                <Link to="#" className="menu-img img mb-4" style={{ backgroundImage: `url(${pizza.image})` }}></Link>
                                <div className="text">
                                    <h3><Link to="#">{pizza.name}</Link></h3>
                                    <p>{pizza.description}</p>
                                    <div className="bottom-content">
                                        <p className="price"><span>${pizza.price.toFixed(2)}</span></p>
                                        <p><Link to="#" className="btn btn-white btn-outline-white" onClick={(event) => handleOrderPizza(event, pizza)}>Add to cart</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
};

export default React.memo(HotMeals);