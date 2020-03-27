import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContainer from "./AppContainer";
import {Provider} from "react-redux";
import store from "../redux/redux-store";


export default class App extends Component {
    render() {
        return (
            <div>
               <Provider store={store}>
                   <AppContainer/>
               </Provider>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
