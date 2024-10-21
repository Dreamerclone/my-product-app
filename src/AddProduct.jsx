import React, { useState } from 'react';
import axios from 'axios';

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
      // Send POST request to your backend API
      const response = await axios.post('http://localhost:4000/api/products', product);
      alert('Product successfully saved!'); // Show success alert
      console.log(response.data);
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
    <form onSubmit={handleSubmit}>
      <input type="text" name="product_code" value={product.product_code} onChange={handleChange} placeholder="Product Code" required />
      <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
      <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
      <input type="number" name="quantity" value={product.quantity} onChange={handleChange} placeholder="Quantity" required />
      <input type="date" name="date_added" value={product.date_added} onChange={handleChange} required />

      <button type="submit">Save</button>
      <button type="button" onClick={handleClear}>Clear</button>
    </form>
  );
};

export default AddProduct;