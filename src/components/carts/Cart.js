import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartItem from './CartItem';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await axios.get('https://api.example.com/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    }

    fetchCartItems();
  }, []);

  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div className="cart">
      {cartItems.map(item => (
        <CartItem key={item.product.id} item={item} />
      ))}
      <p>Total: ${totalPrice}</p>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
