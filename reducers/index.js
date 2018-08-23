import {
  combineReducers
} from 'redux';
import homePageReducer from './home-page';
import searchResReducer from './search-result';
import shoppingMallReducer from './shopping-mall';

const rootReducer = combineReducers({
  homePageReducer,
  searchResReducer,
  shoppingMallReducer
});

export default rootReducer;