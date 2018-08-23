import {
  createStore,
  applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function storeProvider(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}