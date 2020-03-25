import React from "react"
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {NavLink} from "react-router-dom";


const Header = ()=>{
    return<div>
        <Box m={1}>
            <Box component="span" m={0.5}>
                <Button variant="outlined" color="primary">
                    <NavLink to={'/comopanies'}>Companies</NavLink>
                </Button>
            </Box>
            <Box component="span" m={0.5}>
                <Button variant="outlined"  color="primary">
                    <NavLink to={'/emploees'}>Emploees</NavLink>
                </Button>
            </Box>
        </Box>

    </div>
}

export default Header
