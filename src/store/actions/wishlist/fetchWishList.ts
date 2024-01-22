// src/actions/wishlistActions.ts
import { Dispatch } from 'redux';
import {
  FETCH_WISHLIST_REQUEST,
  FETCH_WISHLIST_SUCCESS,
  FETCH_WISHLIST_FAILURE,
} from '../../types/wishlistActionTypes';

import { fetchApi } from '../../../helper/fetchApi';
import { Wishlist } from '../../../types';


export const fetchWishlistRequest = () => ({
  type: FETCH_WISHLIST_REQUEST,
});

export const fetchWishlistSuccess = (wishlists: Wishlist) => ({
  type: FETCH_WISHLIST_SUCCESS,
  payload: wishlists,
});

export const fetchWishlistFailure = (error: string) => ({
  type: FETCH_WISHLIST_FAILURE,
  payload: error,
});

export const fetchWishlist = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(fetchWishlistRequest());

    try {
      const data = await fetchApi(`/wishlist/`, 'GET');
      dispatch(fetchWishlistSuccess(data));
    } catch (error: any) {
      dispatch(fetchWishlistFailure(error.message));
    }
  };
};
