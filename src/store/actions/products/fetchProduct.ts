// src/actions/productActions.ts
import { Dispatch } from 'redux';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../../types/productActionTypes';

const username = 'admin';
const password = 'password123';
const API_URL:any = process.env.REACT_APP_API_URL;

const headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));

interface Product {
  id: number;
  name: string;
}

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products: Product[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error: string) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProducts = (category: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(fetchProductsRequest());

    try {
      const response = await fetch(`${API_URL}/products/${category}`, {
        method: 'GET',
        headers: headers,
      });
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      dispatch(fetchProductsSuccess(data));
    } catch (error: any) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};
