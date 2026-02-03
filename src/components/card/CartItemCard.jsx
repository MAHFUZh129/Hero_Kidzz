"use client"
import { decreaseItemDb, deleteItemsFromCart, increaseItemDb } from "@/action/server/cart";
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CartItemCard = ({ item, updateQuantity, removeItem }) => {
    //   const { title, image, price, quantity } = item;
    const { title, image, quantity, price, _id } = item;
    const [loading, setLoading] = useState(false);

    const handleDeleteCart = async () => {
        // alert(item._id)
        setLoading(true);
        Swal.fire({
            title: "Are you sure ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await deleteItemsFromCart(_id);

                if (result.success) {
                      removeItem(_id);

                    Swal.fire({
                        title: "Deleted!",
                        text: "removed the product from cartlist",
                        icon: "success",
                    });
                } else {
                    Swal.fire({
                        title: "Opps!",
                        text: "Something went wrong.",
                        icon: "error",
                    });
                }
            }
            setLoading(false);
        });
    };

      const onIncrease = async () => {
        setLoading(true);
        const result = await increaseItemDb(_id, quantity);

        if (result.success) {
          Swal.fire("success", "Added this product to cart", "success");
          updateQuantity(_id, quantity + 1);
        }
        setLoading(false);
      };


      const onDecrease= async()=>{
        setLoading(true);
        const result = await decreaseItemDb(_id,quantity)
        if(result.success){
            Swal.fire("success", "removed this product from cart", "success")
            updateQuantity(_id,quantity - 1)

        }
        setLoading(false);
      }

    return (
        <div className="group flex gap-4 p-5 rounded-2xl border bg-white shadow-sm hover:shadow-lg transition">
      
      {/* IMAGE */}
      <div className="w-28 h-28 relative rounded-xl overflow-hidden border">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>

      {/* INFO */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-800 line-clamp-2">
            {title}
          </h3>
          <p className="text-primary font-bold mt-1">৳ {price}</p>
        </div>

        {/* QUANTITY */}
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={onDecrease}
            disabled={quantity === 1 || loading}
            className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-gray-100 disabled:opacity-50"
          >
            <FaMinus size={12} />
          </button>

          <span className="font-medium text-lg w-6 text-center">
            {quantity}
          </span>

          <button
            onClick={onIncrease}
            disabled={quantity === 10 || loading}
            className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-gray-100 disabled:opacity-50"
          >
            <FaPlus size={12} />
          </button>
        </div>
      </div>

      {/* PRICE + DELETE */}
      <div className="flex flex-col items-end justify-between">
        <p className="font-semibold text-gray-700">
          ৳ {price * quantity}
        </p>

        <button
          onClick={handleDeleteCart}
          disabled={loading}
          className="text-red-500 hover:text-red-600 transition"
        >
          <FaTrash />
        </button>
      </div>
    </div>
    );
};

export default CartItemCard;
