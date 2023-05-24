import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
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
      await axios.post('https://api.example.com/register', formData);
      alert('Account created successfully!');
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <button type="submit">Create Account</button>
    </form>
  );
}

export default RegisterForm;
