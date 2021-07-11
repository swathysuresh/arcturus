import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import { cartReducer } from "./reducer/cartReducer";
import {productReducer} from "./reducer/productReducer"


const reducer = combineReducers({cart:cartReducer, 
                                getProducts:productReducer});

const middleware = [thunk];

const store = createStore(reducer,
                          composeWithDevTools(applyMiddleware(...middleware))
                );

export default store;