'use client'
import React, { useMemo, useState } from 'react';
import CartItemCard from '../card/CartItemCard';

const Cart = ({ cartItem = [] }) => {
    const [items, setItems] = useState(cartItem);

    const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );
    const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + (item.quantity * item.price), 0),
    [items]
  );

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item._id != id));
  };

  const updateQuantity = (id, q) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id == id ? { ...item, quantity: q } : item
      )
    );
  };

    return (

        <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8"> Your Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT : CART ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20 text-gray-500 text-lg">
              Your cart is empty 🛍️
            </div>
          ) : (
            items.map((item) => (
              <CartItemCard
                key={item._id.toString()}
                item={{ ...item, _id: item._id.toString() }}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
              />
            ))
          )}
        </div>

        {/* RIGHT : CART SUMMARY */}
        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-20">
          <h2 className="text-xl font-semibold mb-6">Cart Summary</h2>

          <div className="flex justify-between mb-3 text-gray-600">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between mb-3 text-gray-600">
            <span>Subtotal</span>
            <span>৳ {totalPrice}</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-primary">৳ {totalPrice}</span>
          </div>

          <button
            // onClick={handleConfirm}
            // disabled={items.length === 0}
            className="btn btn-primary w-full mt-6 rounded-xl text-lg"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>

    );
};

export default Cart;