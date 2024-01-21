import { combineReducers } from 'redux';
import productReducer from './product';
import addToshWishListReducer from './addToWishList';


const rootReducer = combineReducers({
  products: productReducer,
  addToWishList: addToshWishListReducer,
});

export default rootReducer;
