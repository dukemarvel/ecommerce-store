import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import CartItem from './CartItem';

const mockCartItems = [
  {
    id: 1,
    product: {
      id: 1,
      name: 'Product 1',
      description: 'This is product 1',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
    },
    quantity: 2,
  },
  {
    id: 2,
    product: {
      id: 2,
      name: 'Product 2',
      description: 'This is product 2',
      price: 29.99,
      image: 'https://via.placeholder.com/150',
    },
    quantity: 1,
  },

];


function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCartItems() {
      //try {
        //const response = await axios.get('https://api.example.com/cart');
        //setCartItems(response.data);
      //} catch (error) {
        //console.error('Error fetching cart items:', error);
      //}

      setCartItems(mockCartItems);
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
