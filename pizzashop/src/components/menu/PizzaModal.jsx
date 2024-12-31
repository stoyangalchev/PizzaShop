import React from 'react';

const PizzaModal = React.memo(({ pizza, closeModal }) => {
    if (!pizza || !pizza.name) {
        return null; // Return null if pizza is not defined or does not have the name property
    }

    console.log(pizza); // Log the pizza object for debugging

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h5 className="modal-title">{pizza.name}</h5>
                    <button type="button" className="close" onClick={closeModal}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <img src={pizza.image} alt={pizza.name} className="img-fluid" />
                    <p><strong>Description:</strong> {pizza.description}</p>
                    <p><strong>Price:</strong> ${pizza.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
});

export default PizzaModal;