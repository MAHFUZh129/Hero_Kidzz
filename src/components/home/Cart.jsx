'use client'
import React, { useMemo, useState } from 'react';
import CartItemCard from '../card/CartItemCard';
import { FaCheckCircle, FaMoneyBillWave, FaShoppingBag } from 'react-icons/fa';
import Link from 'next/link';


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

<div className="sticky top-20">
  <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-[2px] shadow-xl">
    <div className="bg-white rounded-3xl p-6">

      {/* Header */}
      <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
        <FaShoppingBag className="text-primary text-2xl" />
        Order Summary
      </h2>

      {/* Info Cards */}
      <div className="space-y-4">

        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
          <span className="text-gray-600 flex items-center gap-2">
            📦 Items
          </span>
          <span className="font-semibold text-gray-800">
            {totalItems}
          </span>
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
          <span className="text-gray-600 flex items-center gap-2">
            💰 Subtotal
          </span>
          <span className="font-semibold text-gray-800">
            ৳ {totalPrice}
          </span>
        </div>

      </div>

      {/* Divider */}
      <div className="my-6 border-t border-dashed"></div>

      {/* Total */}
      <div className="flex items-center justify-between text-xl font-bold mb-6">
        <span>Total</span>
        <span className="text-primary flex items-center gap-2">
          <FaMoneyBillWave />
          ৳ {totalPrice}
        </span>
      </div>

      {/* CTA Button */}
      <Link href={'/checkout'}
    disabled={!items.length}
        className="w-full py-4 rounded-2xl text-lg font-semibold text-white 
                   bg-gradient-to-r from-primary to-secondary 
                   hover:scale-[1.02] active:scale-95 transition-all
                   flex items-center justify-center gap-3"
      >
        <FaCheckCircle className="text-xl" />
        Confirm Order
      </Link >

      {/* Trust Text */}
      <p className="text-center text-sm text-gray-400 mt-4">
        🔒 Secure & Fast Checkout
      </p>

    </div>
  </div>
</div>

            </div>
        </div>

    );
};

export default Cart;