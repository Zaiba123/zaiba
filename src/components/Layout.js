import { Link } from 'react-router-dom'
import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Layout({children}) {
    return (
        <div>

        <AppBar position="static" className="navBar">  
           <Toolbar>
                <Typography variant="h6" >
                Zaiba 
                </Typography>
                <Button color="inherit" component={Link} to={'/'}>Work</Button>
                <Button color="inherit" component={Link} to={'/project'}>Projects</Button>
                <Button color="inherit" component={Link} to={'/goals'}>Goals</Button>
            </Toolbar>
        </AppBar>
        <div className="page-wrapper">{children}</div>
        </div>
    )
}
