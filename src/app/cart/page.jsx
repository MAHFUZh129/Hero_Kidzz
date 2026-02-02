import { getCart } from '@/action/server/cart';
import CartItemCard from '@/components/card/CartItemCard';
import React from 'react';

const CartItems = async() => {
    const cartItems = await getCart()
    console.log(cartItems)

    const formattedItems = cartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));


    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {formattedItems.map((item) => (
          <CartItemCard key={item._id}
           item={item}
            />
        
        ))}
      </div>

      {/*  Cart Summary */}
      <div className="mt-8 p-4 border rounded-xl bg-gray-50">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          {/* <span>৳ {total}</span> */}
        </div>

        <button className="btn btn-primary w-full mt-4">
          Proceed to Checkout
        </button>
      </div>
    </div>
    );
};

export default CartItems;