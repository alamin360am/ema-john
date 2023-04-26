import React from 'react';
import './cart.css';

const Cart = ({cart}) => {

    let quantity = 0;
    let totalPrice = 0;
    let totalShipping = 0;

    for (const product of cart) {

        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        product.quantity =  product.quantity || 1;

        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
    }

    const tax = totalPrice * 7/100;
    const total = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tax (7%): {tax.toFixed(2)}</p>
            <h4>Total: {total}</h4>
        </div>
    );
};

export default Cart;