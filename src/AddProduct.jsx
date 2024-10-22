import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    product_code: '',
    name: '',
    description: '',
    price: '',
    quantity: '',
    date_added: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/products', product);
      alert('Product successfully saved!'); 
      console.log(response.data);
      handleClear(); 
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleClear = () => {
    setProduct({
      product_code: '',
      name: '',
      description: '',
      price: '',
      quantity: '',
      date_added: ''
    });
  };

  return (
    <div className="container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          name="product_code"
          value={product.product_code}
          onChange={handleChange}
          placeholder="Product Code"
          required
        />
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
        />
        <input
          type="date"
          name="date_added"
          value={product.date_added}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-submit">Save</button>
        <button type="button" className="btn-clear" onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
};

export default AddProduct;
