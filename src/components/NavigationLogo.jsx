import React from 'react';
import logo from '../utils/static/logo.png';
import uclLogo from '../utils/static/ucl-logo.png';
import '../index.css';

const NavigationLogo = () => {
    return (
        <picture className='nav-logo'>
            <img src={logo} alt='logo' width={50} height={50}/>
            <h2 className='logo-title'>Real<span>madrid</span></h2>
            <img src={uclLogo} alt='14 UCL Titles' width={50} height={50}/>
        </picture>
    )
}

export default NavigationLogo;
