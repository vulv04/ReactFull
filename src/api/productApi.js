import api from ".";

export const createProduct = (data) => api.post("/api/products", data);
export const getProducts = () => api.get("/api/products");
export const getProductById = (id) => api.get(`/api/products/${id}`);
export const updateProduct = (id, data) => api.put(`/api/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/api/products/${id}`);
