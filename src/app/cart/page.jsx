import { getCart } from '@/action/server/cart';
import React from 'react';

const CartItems = () => {
    const cartItems = getCart()
    return (
        <div>
            {cartItems.length}
        </div>
    );
};

export default CartItems;