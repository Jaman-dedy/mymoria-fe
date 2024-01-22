// src/reducers/removeTowishlistreducer.ts
import {
    REMOVE_WISHLIST_REQUEST,
    REMOVE_WISHLIST_SUCCESS,
    REMOVE_WISHLIST_FAILURE,
    REMOVE_WISHLIST_CLEAR,
  } from '../types/wishlistActionTypes';
  
  const initialState = {
    productId: '',
  };
  
  const removeToshWishListReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case REMOVE_WISHLIST_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case REMOVE_WISHLIST_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          success: true,
        };
      case REMOVE_WISHLIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case REMOVE_WISHLIST_CLEAR:
        return {
          ...state,
          loading: false,
          error: null,
          data: null,
          success: false,
        };
      default:
        return state;
    }
  };
  
  export default removeToshWishListReducer;
  