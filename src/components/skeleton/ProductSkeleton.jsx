import React from 'react';

const ProductSkeleton = () => {
    return (
         <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-sm animate-pulse">
      
      {/* Image Skeleton */}
      <div className="h-56 w-full bg-gray-200" />

      {/* Content Skeleton */}
      <div className="p-5 space-y-4">
        
        {/* Title */}
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />

        {/* Rating */}
        <div className="flex items-center gap-3">
          <div className="h-4 w-20 bg-gray-200 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-14 bg-gray-200 rounded" />
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <div className="h-6 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
        </div>

        {/* Button */}
        <div className="h-10 w-full bg-gray-200 rounded-xl" />
      </div>
    </div>
    );
};

export default ProductSkeleton;