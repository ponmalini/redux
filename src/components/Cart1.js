import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Cart1 = () => {
    // Access the cart state using useSelector
    const cartItems = useSelector((state) => state.cartItems);


    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);



    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <h1>Cart Items</h1>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - ${item.price}

                            </li>
                        ))}
                    </ul>
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart1;
