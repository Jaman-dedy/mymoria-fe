// src/actions/addWishlist.ts
import { Dispatch } from 'redux';
import {
  ADD_WISHLIST_REQUEST,
  ADD_WISHLIST_SUCCESS,
  ADD_WISHLIST_FAILURE,
} from '../../types/addWishListActionTypes';

import { fetchProductsApi } from '../../../helper/fetchApi';

const username = 'admin';
const password = 'password123';
const API_URL:any = process.env.REACT_APP_API_URL;

const headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));

interface Product {
  id: number;
  name: string;
}

export const addToWishListRequest = () => ({
  type: ADD_WISHLIST_REQUEST,
});

export const addToWishlistSuccess = (products: Product[]) => ({
  type: ADD_WISHLIST_SUCCESS,
  payload: products,
});

export const addToWishlistFailure = (error: string) => ({
  type: ADD_WISHLIST_FAILURE,
  payload: error,
});

export const addToWishlist = (productId: string) => {
    return async (dispatch: Dispatch<any>) => {
      dispatch(addToWishListRequest());
  
      try {
        const data = await fetchProductsApi(`${API_URL}/wishlist/add`, 'POST', {productId});
        dispatch(addToWishlistSuccess(data));
      } catch (error: any) {
        dispatch(addToWishlistFailure(error.message));
      }
    };
  };
