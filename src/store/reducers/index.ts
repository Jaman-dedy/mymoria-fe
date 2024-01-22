import { combineReducers } from 'redux';
import productReducer from './product';
import addToshWishListReducer from './addToWishList';
import wishListReducer from './fetchWishList';
import removeToshWishListReducer from './removeToWishList';


const rootReducer = combineReducers({
  products: productReducer,
  addToWishList: addToshWishListReducer,
  wishLists: wishListReducer,
  removeToWishList: removeToshWishListReducer,
});

export default rootReducer;
