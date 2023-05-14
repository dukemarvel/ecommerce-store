import React, { useState } from 'react';
import axios from 'axios';

function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://api.example.com/checkout', formData);
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
      <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
      <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
      <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} required />
      <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
        <option value="">Select Payment Method</option>
        <option value="creditCard">Credit Card</option>
        <option value="paypal">PayPal</option>
      </select>
      <button type="submit">Place Order</button>
    </form>
  );
}

export default CheckoutForm;
