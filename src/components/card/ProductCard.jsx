import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import CartButton from "../buttons/CartButton";

export default function ProductCard({ product }) {
  const {_id,
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
  } = product;

  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm">
      
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Image
        width={200} height={180}
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center text-yellow-400">
            <FaStar />
            <span className="ml-1 font-medium text-gray-800">
              {ratings}
            </span>
          </div>
          <span className="text-gray-500">
            ({reviews} reviews)
          </span>
          <span className="text-green-600 font-medium">
            • {sold} sold
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="text-sm line-through text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <CartButton product={{...product,_id:_id.toString()}}></CartButton>
       
       <Link href={`/products/${_id}`}>
        <button className="w-full mt-2 flex items-center justify-center gap-2 btn btn-otline text-primary py-2.5 rounded-xl font-medium hover:bg-primary/90 hover:text-white transition">
         Veiw Details
        </button>
       </Link>
      </div>
    </div>
  );
}
