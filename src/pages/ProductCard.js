import React from 'react';

const ProductCard = ({ product }) => {
    const { name, price } = product;

    return (
        <div>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            {/* Add buttons, add to cart functionality, etc. */}
        </div>
    );
};

export default ProductCard;
