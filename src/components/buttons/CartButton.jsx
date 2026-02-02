'use client'
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartButton = ({ product }) => {
  const session = useSession()
  const path = usePathname();
  const router = useRouter();
  const islogin = session?.status == "authenticated";
  // console.log(session)
  const handleAdd2Cart = async () => {
    if (islogin) {
      alert('55')
    }
    else {
      router.push(`/login?callbackUrl=${path}`);
      //   setIsLoading(false);
    }
  };


  return (
    <button onClick={handleAdd2Cart} className="w-full md:w-auto mt-4 flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition">
      <FaShoppingCart />
      Add to Cart
    </button>
  );
};

export default CartButton;