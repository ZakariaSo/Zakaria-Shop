import axios from 'axios';

const API_BASE = 'https://fakestoreapi.com';

export const api = {
  async getProducts() {
    const response = await axios.get(`${API_BASE}/products`);
    return response.data;
  },

  async getProduct(id: number) {
    const response = await axios.get(`${API_BASE}/products/${id}`);
    return response.data;
  },

  async getCategories() {
    const response = await axios.get(`${API_BASE}/products/categories`);
    return response.data;
  },

  async getProductsByCategory(category: string) {
    const response = await axios.get(`${API_BASE}/products/category/${category}`);
    return response.data;
  }
};