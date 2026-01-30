import ProductCard from '@/components/card/ProductCard';
import Products from '@/components/home/Products';
import React from 'react';

export const metadata = {
  title: "All Products",
  description:
    "Browse a wide collection of safe, fun, and educational toys for kids.",

  keywords: [
    "kids toy products",
    "educational toys",
    "children toys collection",
    "toy store products",
    "Hero Kidz products",
  ],

  openGraph: {
    title: "Hero Kidz Products",
    images: [
      {
        url: "https://i.ibb.co.com/tMc6XsHC/image.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Products Page",
      },
    ],
  },
};


const page = () => {
    return (
        <div>
           <Products></Products>
        </div>
    );
};

export default page;