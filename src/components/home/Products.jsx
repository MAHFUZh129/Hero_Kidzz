import React from 'react';
// import products from '@/data/toys.json'
import ProductCard from '../card/ProductCard';
import { getProducts } from '@/action/server/products';



const Products = async() => {

    const products =await getProducts()

    return (
        <div>
            <h5 className='text-center text-3xl text-primary font-extrabold p-5'>Our Products</h5>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    products.map(product => <ProductCard product={product} key={product.title} />)
                }
            </div>

        </div>
    );
};

export default Products;