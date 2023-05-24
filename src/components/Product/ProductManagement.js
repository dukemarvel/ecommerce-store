import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';

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

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    //try {
      //const response = await axios.get('https://api.example.com/products');
      //setProducts(response.data);
    //} catch (error) {
      //console.error('Error fetching products:', error);
    //}
    setProducts(mockProducts);
  }

  

  async function handleDelete(id) {
    try {
      await axios.delete(`https://api.example.com/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }

  async function handleSubmit(product) {
    try {
      if (product.id) {
        await axios.put(`https://api.example.com/products/${product.id}`, product);
      } else {
        await axios.post('https://api.example.com/products', product);
      }
      fetchProducts();
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  }

  return (
    <div className="product-management">
      {selectedProduct ? (
        <ProductForm product={selectedProduct} onSubmit={handleSubmit} />
      ) : (
        <button onClick={() => setSelectedProduct({})}>Add Product</button>
      )}
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <button onClick={() => setSelectedProduct(product)}>Edit</button>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProductManagement;
