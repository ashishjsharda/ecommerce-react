import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch product data from an API or use mock data
        // Example using mock data:
        const mockProducts = [
            { id: 1, name: 'Product 1', price: 9.99 },
            { id: 2, name: 'Product 2', price: 19.99 },
            { id: 3, name: 'Product 3', price: 14.99 },
        ];
        setProducts(mockProducts);
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <div>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
