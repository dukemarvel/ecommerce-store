import React, { useState } from 'react';

function ProductForm({ product, onSubmit }) {
  const [formData, setFormData] = useState(product || {
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
      <button type="submit">{product ? 'Update' : 'Add'} Product</button>
    </form>
  );
}

export default ProductForm;
