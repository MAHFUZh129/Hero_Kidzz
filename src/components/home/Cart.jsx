'use client'
import React, { useMemo, useState } from 'react';
import CartItemCard from '../card/CartItemCard';

const Cart = ({ cartItem = [] }) => {
    const [items, setItems] = useState(cartItem);

    const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item._id != id));
  };


    return (

        <div className="flex gap-6 flex-col lg:flex-row">
            {/* LEFT : CART ITEMS */}
            <div className="flex-1 space-y-4">
                {items.map((item) => (
                    <CartItemCard
                        key={item._id.toString()}
                        item={{ ...item, _id: item._id.toString() }}
                        removeItem={removeItem}
                        // updateQuantity={updateQuantity}
                    />
                ))}
            </div>
            <div className="flex-1">
                <span>{totalItems}</span>
            </div>

        </div>

    );
};

export default Cart;