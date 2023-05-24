import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
      await axios.post('https://api.example.com/login', formData);
      alert('Logged in successfully!');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
