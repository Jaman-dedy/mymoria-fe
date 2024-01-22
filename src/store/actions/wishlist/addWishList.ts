// src/actions/addWishlist.ts
import { Dispatch } from 'redux';
import {
  ADD_WISHLIST_REQUEST,
  ADD_WISHLIST_SUCCESS,
  ADD_WISHLIST_FAILURE,
} from '../../types/wishlistActionTypes';

import { fetchApi } from '../../../helper/fetchApi';

const username = 'admin';
const password = 'password123';

const headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));

export const addToWishListRequest = () => ({
  type: ADD_WISHLIST_REQUEST,
});

export const addToWishlistSuccess = (productId: string) => ({
  type: ADD_WISHLIST_SUCCESS,
  payload: productId,
});

export const addToWishlistFailure = (error: string) => ({
  type: ADD_WISHLIST_FAILURE,
  payload: error,
});

export const addToWishlist = (productId: string) => {
    return async (dispatch: Dispatch<any>) => {
      dispatch(addToWishListRequest());
  
      try {
        const data = await fetchApi(`/wishlist/add`, 'POST', {productId});
        dispatch(addToWishlistSuccess(data));
      } catch (error: any) {
        dispatch(addToWishlistFailure(error.message));
      }
    };
  };
