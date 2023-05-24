import React, { useState, useEffect } from 'react';

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

function ProductDetail({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = mockProducts.find(product => product.id === productId);
    setProduct(selectedProduct);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductDetail;
