// src/actions/removeTowishlist.ts
import { Dispatch } from 'redux';
import {
  REMOVE_WISHLIST_REQUEST,
  REMOVE_WISHLIST_SUCCESS,
  REMOVE_WISHLIST_FAILURE,
} from '../../types/wishlistActionTypes';

import { fetchApi } from '../../../helper/fetchApi';

export const removeToWishListRequest = () => ({
  type: REMOVE_WISHLIST_REQUEST,
});

export const removeToWishlistSuccess = (data: any) => ({
  type: REMOVE_WISHLIST_SUCCESS,
  payload: data,
});

export const removeToWishlistFailure = (error: string) => ({
  type: REMOVE_WISHLIST_FAILURE,
  payload: error,
});

export const removeToWishlist = (productId: string) => {
    return async (dispatch: Dispatch<any>) => {
      dispatch(removeToWishListRequest());
  
      try {
        const data = await fetchApi(`/wishlist/remove/${productId}`, 'DELETE', {productId});
        dispatch(removeToWishlistSuccess(data));
      } catch (error: any) {
        dispatch(removeToWishlistFailure(error.message));
      }
    };
  };
