'use server'

import { collectionName, dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"

export const getProducts = async () => {
  const collection = await dbConnect(collectionName.PRODUCTS)

  const products = await collection.find().toArray()

  return products.map(product => ({
    ...product,
    _id: product._id.toString(),
  }))
}

export const getSingleProduct = async (id) => {
  if (!id || id.length !== 24) {
    return {}
  }

  const collection = await dbConnect(collectionName.PRODUCTS)

  const product = await collection.findOne({ _id: new ObjectId(id) })

  if (!product) return {}

  return {
    ...product,
    _id: product._id.toString(),
  }
}
