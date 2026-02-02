"use server";

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const { dbConnect,  collectionName } = require("@/lib/dbConnect");

const cartCollection = dbConnect(collectionName.CART);

export const handleCart = async ({ product, inc = true }) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };

  //getCartItem->user.email && productId
  const query = { email: user?.email, productId: product?._id };

  const isAdded = await cartCollection.findOne(query);

  if (isAdded) {
    //if Exist:Update Cart
    const updatedData = {
      $inc: {
        quantity: inc ? 1 : -1,
      },
    };
    const result = await cartCollection.updateOne(query, updatedData);
    return { success: Boolean(result.modifiedCount) };

  } 
  else {
    
  }
};