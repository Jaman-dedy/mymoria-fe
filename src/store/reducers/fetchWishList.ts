// src/reducers/fetchWishList.ts
import {
    FETCH_WISHLIST_REQUEST,
    FETCH_WISHLIST_SUCCESS,
    FETCH_WISHLIST_FAILURE,
  } from '../types/wishlistActionTypes';
  
  const initialState = {
    wishlist: [],
    loading: false,
    error: null,
  };
  
  const wishListReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_WISHLIST_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_WISHLIST_SUCCESS:
        return {
          ...state,
          loading: false,
          wishlist: action.payload?.wishlistItems,
        };
      case FETCH_WISHLIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default wishListReducer;
  