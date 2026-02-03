import { getCart } from '@/action/server/cart';
import CartItemCard from '@/components/card/CartItemCard';
import Cart from '@/components/home/Cart';
import Link from 'next/link';
import React from 'react';

const CartItems = async() => {
    const cartItems = await getCart()
    console.log(cartItems)

    const formattedItems = cartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));


    return (
       <div className="max-w-6xl mx-auto px-4 py-10">
      
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <FaShoppingCart className="text-primary" />
        Your Shopping Cart
      </h1>

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 bg-white rounded-2xl shadow-sm border">
          <FaBoxOpen className="text-7xl text-gray-300 mb-6" />

          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mb-6 text-center">
            Looks like you haven’t added anything to your cart yet.
          </p>

          <Link
            href="/products"
            className="btn btn-primary btn-wide rounded-xl text-lg"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        /* CART CONTENT */
        <Cart cartItem={formattedItems} />
      )}
    </div>
    );
};

export default CartItems;