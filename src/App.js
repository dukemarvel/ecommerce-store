import React from 'react';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/Checkout/CheckoutForm';
import LoginForm from './components/User/LoginForm';
import RegisterForm from './components/User/RegisterForm';
import SearchBar from './components/Search/SearchBar';
import Filter from './components/Search/Filter';
import OrderHistory from './components/Order/OrderHistory';
//import ProductForm from './components/Product/ProductForm';
import ProductManagement from './components/Product/ProductManagement';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Ecommerce Store</h1>
        <LoginForm />
        <RegisterForm />
      </header>
      <main>
        <SearchBar />
        <Filter />
        <ProductList />
        <ProductDetail />
        <Cart />
        <CheckoutForm />
        <OrderHistory />
        <ProductManagement />
      </main>
    </div>
  );
}

export default App;
