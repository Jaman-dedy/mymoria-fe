// src/reducers/removeTowishlistreducer.ts
import {
    REMOVE_WISHLIST_REQUEST,
    REMOVE_WISHLIST_SUCCESS,
    REMOVE_WISHLIST_FAILURE,
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
        };
      case REMOVE_WISHLIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default removeToshWishListReducer;
  