import { createStore } from "redux";
import rootReducer from "./reducer/index";

import {configureStore} from '@reduxjs/toolkit';

const store =createStore(rootReducer);


export default store;
