import React from 'react';
import AddProduct from './AddProduct.jsx';
import ProductList from './ProductList.jsx';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="left-section">
        <AddProduct />
      </div>
      <div className="right-section">
        <ProductList />
      </div>
    </div>
  );
};

export default App;
