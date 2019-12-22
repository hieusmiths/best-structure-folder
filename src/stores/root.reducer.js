import { combineReducers } from 'redux';
import productReducers from './product/reducer';
import authReducers from './auth/reducers'
export default combineReducers({
  productReducers,
  authReducers
});
