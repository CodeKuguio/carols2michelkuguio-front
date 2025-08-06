
import response from '../../public/static/json/products.json';
import {IProduct} from "../models";

export const getProducts = async () => {
  const { products } = response.data || [];
  return products as IProduct[];
};
