import React, { useEffect, useState } from 'react';
//import axios from 'axios';

const mockOrders = [
  {
    id: 1,
    date: '2023-05-17',
    items: [
      {
        product: {
          id: 1,
          name: 'Product 1',
          price: 19.99,
        },
        quantity: 2,
      },
      {
        product: {
          id: 2,
          name: 'Product 2',
          price: 29.99,
        },
        quantity: 1,
      },
    ],
    total: 69.97,
  },

];

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      //try {
        //const response = await axios.get('https://api.example.com/orders');
        //setOrders(response.data);
      //} catch (error) {
        //console.error('Error fetching orders:', error);
      //}
      setOrders(mockOrders);
    }

    fetchOrders();
  }, []);

  return (
    <div className="order-history">
      {orders.map(order => (
        <div key={order.id} className="order">
          <h2>Order #{order.id}</h2>
          <p>Date: {new Date(order.date).toLocaleDateString()}</p>
          <p>Total: ${order.total}</p>
          <ul>
            {order.items.map(item => (
              <li key={item.product.id}>
                {item.product.name} x {item.quantity} = ${item.product.price * item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
