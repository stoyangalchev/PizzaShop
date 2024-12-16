import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../actions/cartActions';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);

    console.log(cart);

    const handlePurchase = () => {
        const purchasedItems = cart.map(item => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity
        }));
        const totalAmount = purchasedItems.reduce((total, item) => total + item.total, 0);
        const purchaseDetails = {
            items: purchasedItems,
            totalAmount: totalAmount
        };
        console.log('Purchase Details:', purchaseDetails);
        alert(`Purchased ${cart.length} pizza(s) for a total of $${totalAmount.toFixed(2)}`);
    };

    const handleIncrease = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity(id));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const totalPrice = cart.reduce((total, item) => {
        const itemTotal = item.price * item.quantity;
        console.log(`Item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}, Item Total: ${itemTotal}`);
        return total + itemTotal;
    }, 0);

    return (
        <section className="ftco-section">
            <div className="containe2">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center">
                        <h2 className="mb-4 " style={{ fontSize: "5rem" }}>Cart</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {cart.map((pizza, index) => (
                            <div className="d-flex align-items-center mb-4" key={index} style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                                <div className="menu-wrap" style={{ flex: '1' }}>
                                    <Link to="#" className="menu-img img mb-4" style={{ backgroundImage: `url(${pizza.image})`, width: '100px', height: '100px', backgroundSize: 'cover', backgroundPosition: 'center' }}></Link>
                                    <div className="text">
                                        <h3><Link to="#">{pizza.name}</Link></h3>
                                        <p>{pizza.description}</p>
                                        <p className="price"><span>${pizza.price.toFixed(2)}</span></p>
                                    </div>
                                </div>
                                <div className="quantity-controls d-flex align-items-center" style={{ marginLeft: '20px' }}>
                                    <button className="btn btn-outline-secondary" onClick={() => handleDecrease(pizza.id)}>-</button>
                                    <span className="quantity mx-2">{pizza.quantity}</span>
                                    <button className="btn btn-outline-secondary" onClick={() => handleIncrease(pizza.id)}>+</button>
                                    <button className="btn btn-outline-danger ml-3" onClick={() => handleRemove(pizza.id)}>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                </div>
                <div className="row justify-content-center">
                    <button className="btn btn-primary mt-3" onClick={handlePurchase}>Purchase</button>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Cart);