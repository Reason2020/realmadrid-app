import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationLogo from './NavigationLogo';
import "../index.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavigationLogo />
        <ul className='navmenu'>
            <li>
                <NavLink to='/' className='nav-item'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/news' className='nav-item'>News</NavLink>
            </li>
            <li>
                <NavLink to='/players' className='nav-item'>Players</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
