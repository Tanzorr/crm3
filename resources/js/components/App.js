import React, { Component } from 'react';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";

import { Container } from '@material-ui/core';


import ReactDOM from 'react-dom';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Companies from "./Companies";
import Emploees from "./Emploees";

export default class App extends Component {
    render() {
        return (
            <div className="container">

               <Router>
                   <Container maxWidth="lg">
                       <Header/>
                       <Route path='/comopanies' component={Companies}/>
                       <Route path='/emploees' component={Emploees}/>
                   </Container>

               </Router>

               <Footer/>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
