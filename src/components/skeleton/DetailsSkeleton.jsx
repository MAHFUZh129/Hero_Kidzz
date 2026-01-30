export default function DetailsSkeleton() {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-5 md:p-8 animate-pulse">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Image Skeleton */}
        <div className="w-full h-[350px] bg-gray-200 rounded-2xl" />

        {/* Right Content */}
        <div className="space-y-4">
          
          {/* Title */}
          <div className="space-y-2">
            <div className="h-6 w-3/4 bg-gray-200 rounded" />
            <div className="h-4 w-1/2 bg-gray-200 rounded" />
          </div>

          {/* Rating */}
          <div className="flex gap-3">
            <div className="h-4 w-20 bg-gray-200 rounded" />
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-4 w-14 bg-gray-200 rounded" />
          </div>

          {/* Price */}
          <div className="flex gap-3 items-center">
            <div className="h-8 w-28 bg-gray-200 rounded" />
            <div className="h-5 w-20 bg-gray-200 rounded" />
          </div>

          {/* Info List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-200 rounded"
              />
            ))}
          </div>

          {/* Button */}
          <div className="h-12 w-full md:w-52 bg-gray-200 rounded-xl mt-4" />
        </div>
      </div>

      {/* Description */}
      <div className="mt-10 space-y-3">
        <div className="h-5 w-48 bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />
      </div>

      {/* Q&A */}
      <div className="mt-10 space-y-4">
        <div className="h-5 w-40 bg-gray-200 rounded" />

        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl p-4 space-y-2"
          >
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
