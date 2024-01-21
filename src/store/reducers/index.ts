import { combineReducers } from 'redux';
import productReducer from './product';
import addToshWishListReducer from './addToWishList';
import wishListReducer from './fetchWishList';


const rootReducer = combineReducers({
  products: productReducer,
  addToWishList: addToshWishListReducer,
  wishLists: wishListReducer,
});

export default rootReducer;
