import api from './api';

export const productService = {
    getAllProducts: async () => {
        const response = await api.get('/products?limit=194');
        return response.data;
    },

    getProducts: async (limit: number = 10, skip: number = 0) => {
        const response = await api.get(`/products?limit=${limit}&skip=${skip}`);
        return response.data;
    },

    getProductById: async (id: string) => {
        const response = await api.get(`/products/${id}`);
        return response.data;
    },

    getCategories: async () => {
        const response = await api.get('/products/categories');
        return response.data;
    },

    getProductsByCategory: async (category: string, limit = 10, skip = 0) => {
        const response = await api.get(
            `/products/category/${category}?limit=${limit}&skip=${skip}`
        );
        return response.data;
    },
};
