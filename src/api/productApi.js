import api from ".";

export const createProduct = (data) => api.post("/products", data);
export const getProducts = () => api.get("/products");
export const getProductById = (id) => api.get(`/products/${id}`);
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);
