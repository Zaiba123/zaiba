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
           <Toolbar>
                <Typography variant="h6" className="glow" >
                    Zaiba
         {/* <div class="logo"><b>Z<span>a</span>i<span>b</span>a</b> </div> */}
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
