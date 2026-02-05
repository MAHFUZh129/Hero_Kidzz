'use server'

import { authOptions } from "@/lib/authOptions"
import { getSession } from "next-auth/react"
import { clearCart, getCart } from "./cart"

const { dbConnect, collectionName } = require("@/lib/dbConnect")


const orderCollection = dbConnect(collectionName.ORDER)

export const createOrder = async(payload)=>{
    const {user}= await getSession(authOptions) || {}

    if(!user) return {success:false}

     const cart = await getCart();
  if (cart.length == 0) {
    return { success: false };
  }

    const newOrder = {
    createdAt: new Date().toISOString(),
    items: cart,
    ...payload,
    totalPrice,
  };

  const result = await orderCollection.insertOne(newOrder);
     if (Boolean(result.insertedId)) {
    const result = await clearCart();
  }

   return {
    success: result.insertedId,
  };
}