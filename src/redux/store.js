import { combineReducers, createStore } from 'redux';
import addProductsReducer from './reducers/addProductReducer';
import cartReducer from './reducers/cartReducer';

const store = createStore(
    combineReducers({product: addProductsReducer , Cart: cartReducer})
)

export default store;