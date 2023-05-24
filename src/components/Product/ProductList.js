import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const mockProducts = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is product 1',
    price: 19.99,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is product 2',
    price: 29.99,
    image: 'https://via.placeholder.com/150',
  },
  // Add more products as needed
];

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
