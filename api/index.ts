import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const getProductById = async (productId: string | string[]) => {
  const response = await instance.get(`/products/${productId}`);
  return response.data;
};

export { getProductById };
