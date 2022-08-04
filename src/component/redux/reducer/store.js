
import rootReducer from './index';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import handleCart from './handleCart'
import { createStore } from '@reduxjs/toolkit';

const store = createStore(rootReducer,{
    reducer:{handleCart}
});
export default store; 