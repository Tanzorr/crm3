import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Container} from "@material-ui/core";
import Header from "./Header";
import Companyes from "./Companyes";
import Emploees from "./Emploees";
import Footer from "./Footer";




const AppContainer =()=>{
    return <div>
        <Router>
            <Container maxWidth="lg">
                <Header/>
                <Route path='/comopanies' component={Companyes}/>
                <Route path='/emploees' component={Emploees}/>
            </Container>

        </Router>

        <Footer/>
    </div>
}

export default AppContainer
