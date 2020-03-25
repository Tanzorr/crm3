import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from "redux-thunk";

import companiReducer from "./companiReducer";
import emploeeReducer from "./emploeeReducer";




let reducers= combineReducers({
    companiReducer,
    emploeeReducer
})

let store = createStore(reducers,composeWithDevTools(applyMiddleware(thunkMiddleware)))

window.store = store;


export default store;




