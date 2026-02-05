'use server'

import { authOptions } from "@/lib/authOptions"
import { clearCart, getCart } from "./cart"
import { getServerSession } from "next-auth"

const { dbConnect, collectionName } = require("@/lib/dbConnect")


const orderCollection = dbConnect(collectionName.ORDER)

export const createOrder = async (payload) => {
    // const user = await getSession(authOptions) || {}
    const { user } = (await getServerSession(authOptions)) || {};
    if (!user) return { success: false }

    const cart = await getCart();
    if (cart.length == 0) {
        return { success: false };
    }

    const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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