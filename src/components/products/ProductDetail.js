import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductDetail({ match }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`https://api.example.com/products/${match.params.id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }

    fetchProduct();
  }, [match.params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
