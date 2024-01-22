// src/reducers/addTowishlistreducer.ts
import {
    ADD_WISHLIST_REQUEST,
    ADD_WISHLIST_SUCCESS,
    ADD_WISHLIST_FAILURE,
    ADD_WISHLIST_CLEAR,
  } from '../types/wishlistActionTypes';
  
  const initialState = {
    productId: '',
  };
  
  const addToshWishListReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case ADD_WISHLIST_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case ADD_WISHLIST_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload.data,
          productId: action.payload.productId,
          success: true,
          wishlists: {
            wishlist: action.payload?.wishlist?.products
          }
        };
      case ADD_WISHLIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case ADD_WISHLIST_CLEAR:
        return {
          ...state,
          loading: false,
          error: null,
          products: null,
          success: false,
        };
      default:
        return state;
    }
  };
  
  export default addToshWishListReducer;
  