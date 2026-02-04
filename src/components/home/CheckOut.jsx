'use client'
import React from 'react';
import { AiOutlineLoading } from "react-icons/ai";

const CheckOut = ({cartItems =[]}) => {

    const handleSubmit = async(e) =>{
       e.preventDefault();


    }

    return (
        <div className="flex relative gap-10 py-20 flex-col-reverse  md:flex-row ">
      <div
        className={` ${
          loading ? " flex opacity-80 inset-0 absolute" : "hidden"
        }  z-20 glass w-full  h-full  justify-center items-center gap-4`}
      >
        <AiOutlineLoading
          size={50}
          className="animate-spin text-primary font-bold"
        />
        <h2 className={`text-xl font-bold animate-pulse`}>
          {" "}
          Processing CheckOut{" "}
        </h2>
      </div>
      {/* LEFT: FORM */}
      <div className="flex-2">
        <h2 className="text-2xl font-bold my-4">Delivery Information</h2>
        <form
          className="space-y-4 bg-base-100 p-6 shadow-md rounded-lg"
          onSubmit={handleSubmit}
        >
          {/* NAME + EMAIL IN ONE ROW */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={session?.data?.user?.name}
                // onChange={handleChange}
                className="input input-bordered w-full"
                required
                readOnly
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={session?.data?.user?.email}
                className="input input-bordered w-full"
                required
                readOnly
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Delivery Information
            </label>
            <textarea
              name="deliveryInfo"
              className="textarea textarea-bordered w-full"
              rows={3}
              required
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Special Instruction
            </label>
            <textarea
              name="specialInstruction"
              className="textarea textarea-bordered w-full"
              rows={2}
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">Contact No</label>
            <input
              type="tel"
              name="contactNo"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button
            disabled={cartItems.length == 0 || loading}
            type="submit"
            className="btn btn-primary w-full mt-4"
          >
            Check Out with Cash on Delivery
          </button>
        </form>
      </div>

      {/* RIGHT: ITEMS SUMMARY */}
      <div className="flex-1 ">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="bg-base-100 p-4 shadow-md rounded-lg space-y-2 sticky top-4">
          {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between border-b pb-1">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">
                  Qty: {item.quantity} × ৳{item.price}
                </p>
              </div>
              <p className="font-semibold">৳{item.quantity * item.price}</p>
            </div>
          ))}

          <div className="divider"></div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total ({totalItems} items)</span>
            <span>৳{totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CheckOut;