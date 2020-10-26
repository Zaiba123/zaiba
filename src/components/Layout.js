import { Link } from 'react-router-dom'
import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../styles/navbar.css'

export default function Layout({children}) {
    return (
        <div>

        <AppBar position="static" className="neon">  
           <Toolbar className="tool-bg">
                <Typography variant="h6" className="glow" className="navbar-text" >
                    Zaiba
         </Typography>
                <Button color="inherit" component={Link} to={'/'} className="navbar-text">Work</Button>
                <Button color="inherit" component={Link} to={'/project'} className="navbar-text">Projects</Button>
                <Button color="inherit" component={Link} to={'/goals'} className="navbar-text">Goals</Button>
            </Toolbar>
        </AppBar>
        <div className="page-wrapper">{children}</div>
        </div>
    )
}
