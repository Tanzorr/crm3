import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Container} from "@material-ui/core";
import Header from "./Header";
import Companyes from "./companies/Companies";
import Employees from "./employees/Employees";
import Footer from "./Footer";
import AddCompany from "./companies/formCompany";
import editComapany from "./companies/editCompany";




const AppContainer =()=>{

    return <div>
        <Router>
            <Container maxWidth="lg">
                <Header/>
                <Route path='/comopanies' component={Companyes}/>
                <Route path='/emploees' component={Employees}/>
                <Route path='/add' component={AddCompany}/>
                <Route path='/edit/:companyId' component={editComapany}/>
            </Container>

        </Router>

        <Footer/>
    </div>
}

export default AppContainer
