import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from "redux-thunk";

import companyReducer from "./companyReducer";
import emploeeReducer from "./emploeeReducer";




let reducers= combineReducers({
    companyReducer: companyReducer,
    emploeeReducer
})

let store = createStore(reducers,composeWithDevTools(applyMiddleware(thunkMiddleware)))

window.store = store;


export default store;




