import React from 'react';

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img src={item.product.image} alt={item.product.name} />
      <h2>{item.product.name}</h2>
      <p>${item.product.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button>Remove from Cart</button>
    </div>
  );
}

export default CartItem;
