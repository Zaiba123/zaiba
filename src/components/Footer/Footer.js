import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';

import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <a className="footer-link" href="https://github.com/Zaiba123/zaiba">Designed and coded by Zaiba Iqbal <GitHubIcon fontSize="large" /> </a>
           </div>
        </div>
    )
}

export default Footer
