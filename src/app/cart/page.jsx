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
        <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div>
         {cartItems.length == 0 ? (
        <>
          <div className="text-center py-20 space-y-5">
            <h2 className={'text-4xl font-bold'}>
              আপনি কার্টে কোন প্রোডাক্ট এড করেন নি
            </h2>
            <Link
              href={"/products"}
              className="btn btn-primary btn-lg btn-wide"
            >
              {/* <TbHorseToy></TbHorseToy> পন্য দেখুন */}
            </Link>
          </div>
        </>
      ) : (
        <Cart cartItem={formattedItems}></Cart>
      )}
      </div>

     
    </div>
    );
};

export default CartItems;