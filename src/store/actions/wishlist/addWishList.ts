// src/actions/addWishlist.ts
import { Dispatch } from 'redux';
import {
  ADD_WISHLIST_REQUEST,
  ADD_WISHLIST_SUCCESS,
  ADD_WISHLIST_FAILURE,
  ADD_WISHLIST_CLEAR,
} from '../../types/wishlistActionTypes';

import { fetchApi } from '../../../helper/fetchApi';

const username = 'admin';
const password = 'password123';

const headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));

export const addToWishListRequest = () => ({
  type: ADD_WISHLIST_REQUEST,
});

export const addToWishlistSuccess = (data:any, productId: string) => ({
  type: ADD_WISHLIST_SUCCESS,
  payload: {data, productId}
});

export const addToWishlistFailure = (error: string) => ({
  type: ADD_WISHLIST_FAILURE,
  payload: error,
});

export const clearAddWishList = () => ({
  type: ADD_WISHLIST_CLEAR
})

export const addToWishlist = (productId: string) => {
    return async (dispatch: Dispatch<any>) => {
      dispatch(addToWishListRequest());
  
      try {
        const data = await fetchApi(`/wishlist/add`, 'POST', {productId});
        dispatch(addToWishlistSuccess(data, productId));
      } catch (error: any) {
        dispatch(addToWishlistFailure(error.message));
      }
    };
  };
