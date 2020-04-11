import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Container} from "@material-ui/core";
import Header from "./Header";
import Companyes from "./companies/Companies";
import Employees from "./employees/Employees";
import Footer from "./Footer";
import AddCompany from "./companies/formCompany";
import editComapany from "./companies/editCompany";
import AddEmploee from "./employees/FormEmploee"
import editEmployee from "./employees/EditEmployee"



const AppContainer =()=>{

    return <div>
        <Router>
            <Container maxWidth="lg">
                <Header/>
                <Route path='/comopanies' component={Companyes}/>
                <Route path='/emploees' component={Employees}/>
                <Route path='/comopany/add' component={AddCompany}/>
                <Route path='/employees/add' component={AddEmploee}/>
                <Route path='/company/edit/:companyId' component={editComapany}/>
                <Route path='/employees/edit/:employeeId' component={editEmployee}/>
            </Container>

        </Router>

        <Footer/>
    </div>
}

export default AppContainer
