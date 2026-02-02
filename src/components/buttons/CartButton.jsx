'use client'
import { handleCart } from '@/action/server/cart';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CartButton = ({ product }) => {
  const session = useSession()
  const path = usePathname();
  const router = useRouter();
  const islogin = session?.status == "authenticated";
  // console.log(session)
  const handleAdd2Cart = async () => {
    // setIsLoading(true);
    if (islogin) {
      const result = await handleCart({ product, inc:true });
      if (result.success) {
        Swal.fire("Added to Cart", product?.title, "success");
      } else {
        Swal.fire("Opps", "Something Wrong Happen", "error");
      }
      // setIsLoading(false);
    } else {
      router.push(`/login?callbackUrl=${path}`);
      // setIsLoading(false);
    }
  };


  return (
   
    <button onClick={handleAdd2Cart} className="w-full mt-2 bg-primary flex items-center justify-center gap-2 btn btn-otline text-white py-2.5 rounded-xl font-medium hover:bg-primary/80  hover:text-white transition">
      <FaShoppingCart />
      Add to Cart
    </button>
  );
};

export default CartButton;