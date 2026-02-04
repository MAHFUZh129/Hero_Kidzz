'use server'

import { authOptions } from "@/lib/authOptions"
import { getSession } from "next-auth/react"
import { getCart } from "./cart"

const { dbConnect, collectionName } = require("@/lib/dbConnect")


const orderCollection = dbConnect(collectionName.ORDER)

export const createOrder = async()=>{
    const {user}= await getSession(authOptions) || {}

    if(!user) return {success:false}

    const result = await getCart()
    return result
}