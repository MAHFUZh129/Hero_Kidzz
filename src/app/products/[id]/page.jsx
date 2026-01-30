import { getSingleProduct } from "@/action/server/products";
import CartButton from "@/components/buttons/CartButton";
import Image from "next/image";
import { FaStar, FaShoppingCart, FaCheckCircle } from "react-icons/fa";

export default async function ProductDetails({ params }) {

    const {id}=await params 
    const product = await getSingleProduct(id)
   

  const {
    title,
    bangla,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;

  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden p-5 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Image Section */}
        <div className="relative">
          <Image
          width={450} height={380}
            src={image}
            alt={title}
            className="w-full h-[350px] object-cover rounded-2xl"
          />

          {discount > 0 && (
            <span className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          
          {/* Title */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {title}
            </h1>
            <p className="text-gray-500 mt-1">{bangla}</p>
          </div>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center gap-1 text-yellow-400">
              <FaStar />
              <span className="font-semibold text-gray-800">
                {ratings}
              </span>
            </div>
            <span className="text-gray-500">
              ({reviews} reviews)
            </span>
            <span className="text-green-600 font-medium">
              {sold}+ sold
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-primary">
              ৳{discountedPrice}
            </span>
            {discount > 0 && (
              <span className="text-lg text-gray-400 line-through">
                ৳{price}
              </span>
            )}
          </div>

          {/* Info List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            {info.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <FaCheckCircle className="text-green-500" />
                {item}
              </div>
            ))}
          </div>

          {/* Add to Cart */}
          <CartButton></CartButton>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">
          Product Description
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Q&A Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {qna.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-4"
            >
              <p className="font-medium text-gray-800">
                Q: {item.question}
              </p>
              <p className="text-gray-600 mt-1">
                A: {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
