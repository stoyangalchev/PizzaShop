import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from '../../actions/cartActions';


const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const [showModal, setShowModal] = useState(false);
    const [purchaseDetails, setPurchaseDetails] = useState(null);

    const handlePurchase = () => {
        const purchasedItems = cart.map(item => ({
            _id: item._id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity,
            image: item.image // Include the image URL
        }));
        const totalAmount = purchasedItems.reduce((total, item) => total + item.total, 0);
        const details = {
            items: purchasedItems,
            totalAmount: totalAmount
        };
        setPurchaseDetails(details);
        setShowModal(true);
        dispatch(clearCart()); // Clear the cart after purchase
    };

    const handleIncrease = (_id) => {
        dispatch(increaseQuantity(_id));
    };

    const handleDecrease = (_id) => {
        dispatch(decreaseQuantity(_id));
    };

    const handleRemove = (_id) => {
        dispatch(removeFromCart(_id));
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
                                    <button className="btn btn-outline-secondary" onClick={() => handleDecrease(pizza._id)}>-</button>
                                    <span className="quantity mx-2">{pizza.quantity}</span>
                                    <button className="btn btn-outline-secondary" onClick={() => handleIncrease(pizza._id)}>+</button>
                                    <button className="btn btn-outline-danger ml-3" onClick={() => handleRemove(pizza._id)}>
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
                    {cart.length > 0 && (
                        <button
                            className="btn btn-primary mt-3"
                            onClick={handlePurchase}
                        >
                            Purchase
                        </button>
                    )}
                </div>
            </div>

            {showModal && (
                <div className="custom-modal" style={{ display: 'block' }}>
                    <div className="custom-modal-content">
                        <span className="custom-close" onClick={() => setShowModal(false)}>&times;</span>
                        <i className="fas fa-check-circle custom-checkmark"></i> {/* Add the checkmark icon */}
                        <h2>Purchase Confirmation</h2>
                        {purchaseDetails && (
                            <>
                                <hr></hr>
                                <ul>
                                    {purchaseDetails.items.map((item, index) => (
                                        <li key={index}>
                                            <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                                            <p> {item.name} - {item.quantity} x <span style={{ color: "orange" }}>${item.price.toFixed(2)}</span></p>
                                        </li>
                                    ))}
                                </ul>
                                <hr></hr>
                                <p>Total Purchase - <span style={{ color: "green", border: "4px,solid green",borderRadius:"50px",padding:"5px" }}>${purchaseDetails.totalAmount.toFixed(2)}</span></p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default React.memo(Cart);