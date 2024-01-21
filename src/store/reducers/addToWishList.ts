// src/reducers/addTowishlistreducer.ts
import {
    ADD_WISHLIST_REQUEST,
    ADD_WISHLIST_SUCCESS,
    ADD_WISHLIST_FAILURE,
  } from '../types/addWishListActionTypes';
  
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
          products: action.payload,
        };
      case ADD_WISHLIST_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default addToshWishListReducer;
  