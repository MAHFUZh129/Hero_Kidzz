"use client"
import { deleteItemsFromCart } from "@/action/server/cart";
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CartItemCard = ({ item, onIncrease, onDecrease, onRemove }) => {
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
                    //   removeItem(_id);

                    Swal.fire({
                        title: "Deleted!",
                        text: "প্রোডাক্ট কার্ট থেকে বাদ দেয়া হয়েছে.",
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

    //   const onIncrease = async () => {
    //     setLoading(true);
    //     const result = await increaseItemDb(_id, quantity);

    //     if (result.success) {
    //       Swal.fire("success", "এই প্রোডাক্ট টি আরেকবার  যুক্ত করা হলো", "success");
    //       updateQuantity(_id, quantity + 1);
    //     }
    //     setLoading(false);
    //   };


    return (
        <div className="flex gap-4 p-4 border rounded-xl shadow-sm bg-white">

            {/* Product Image */}
            <div className="w-24 h-24 relative">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            {/* Product Info */}
            <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{title}</h3>
                <p className="text-primary font-bold mt-1">৳ {price}</p>

                {/* Quantity Controller */}
                <div className="flex items-center gap-3 mt-3">
                    <button
                        onClick={onDecrease}
                        className="btn btn-sm btn-outline"
                    >
                        <FaMinus />
                    </button>

                    <span className="font-medium">{quantity}</span>

                    <button
                        onClick={onIncrease}
                        className="btn btn-sm btn-outline"
                    >
                        <FaPlus />
                    </button>
                </div>
            </div>

            {/* Remove Button */}
            <button
                onClick={handleDeleteCart}
                className="text-red-500 hover:text-red-600"
            >
                <FaTrash />
            </button>
        </div>
    );
};

export default CartItemCard;
