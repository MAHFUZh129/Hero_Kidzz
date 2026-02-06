'use server'

import { authOptions } from "@/lib/authOptions"
import { clearCart, getCart } from "./cart"
import { getServerSession } from "next-auth"
import { sendEmail } from "@/lib/sendEmail"
import { orderInvoiceTemplate } from "@/lib/invoiceTemplate"

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
        await clearCart();
    }
        await sendEmail({
      to: user.email,
      subject: "Your Order Invoice - Hero Kidz",
      html: orderInvoiceTemplate({
        orderId: result.insertedId.toString(),
        items: cart,
        totalPrice,
      }),
    });
    return {
        success: result.insertedId,
    };
 
}

