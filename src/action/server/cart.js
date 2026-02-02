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
    //Not Exist:insert Cart
    const newData = {
      productId: product?._id,
      email: user?.email,
      title: product.title,
      quantity: 1,
      image: product.image,
      price: product.price - (product.price * product.discount) / 100,
      username: user?.name,
    };
    const result = await cartCollection.insertOne(newData);
    return { success: result.acknowledged };

  }
};

export const getCart = async () => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return [];
  console.log("get cart called");

  const query = { email: user?.email };

  const result = await cartCollection.find(query).toArray();

  return result;
};