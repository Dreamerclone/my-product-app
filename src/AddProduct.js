import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    productCode: '',
    name: '',
    description: '',
    price: '',
    quantity: '',
    dateAdded: ''
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleClear = () => {
    setProduct({
      productCode: '',
      name: '',
      description: '',
      price: '',
      quantity: '',
      dateAdded: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product:', product);
    // You can add your save logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Code:</label>
        <input type="text" name="productCode" value={product.productCode} onChange={handleChange} required />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" name="description" value={product.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required />
      </div>
      <div>
        <label>Date Added:</label>
        <input type="date" name="dateAdded" value={product.dateAdded} onChange={handleChange} required />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={handleClear}>Clear</button>
    </form>
  );
};

export default AddProduct;
