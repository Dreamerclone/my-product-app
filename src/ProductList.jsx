import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    product_code: '',
    name: '',
    description: '',
    price: '',
    quantity: '',
    date_added: ''
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleUpdateChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/products/${editProduct._id}`, updatedProduct);
      alert('Product updated successfully!');
      setEditProduct(null);
      fetchProducts(); 
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/products/${id}`);
      alert('Product deleted successfully!');
      fetchProducts(); // Refresh the product list
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {/* Form for editing product */}
      {editProduct && (
        <form onSubmit={handleUpdateSubmit}>
          <h3>Edit Product</h3>
          <input type="text" name="product_code" value={updatedProduct.product_code} onChange={handleUpdateChange} placeholder="Product Code" required />
          <input type="text" name="name" value={updatedProduct.name} onChange={handleUpdateChange} placeholder="Name" required />
          <textarea name="description" value={updatedProduct.description} onChange={handleUpdateChange} placeholder="Description" required />
          <input type="number" name="price" value={updatedProduct.price} onChange={handleUpdateChange} placeholder="Price" required />
          <input type="number" name="quantity" value={updatedProduct.quantity} onChange={handleUpdateChange} placeholder="Quantity" required />
          <input type="date" name="date_added" value={updatedProduct.date_added} onChange={handleUpdateChange} required />
          <button type="submit">Update</button>
          <button type="button" onClick={() => setEditProduct(null)}>Cancel</button>
        </form>
      )}
      {/* Product table */}
      <table>
        <thead>
          <tr>
            <th>Product Code</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Date Added</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.product_code}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{new Date(product.date_added).toLocaleDateString()}</td>
              <td>
                <button onClick={() => { setEditProduct(product); setUpdatedProduct(product); }}>Edit</button>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
