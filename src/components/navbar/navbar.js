import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'

const NavItem = ({url, children})=>{
    return (
        <li className='nav-item'>
            <Link to={url} className='nav-link text-white'>{children}</Link>
        </li>
    );
}

function Navbar(){
    return(
        <nav className='navbar fixed-navbar navbar-expand-sm bg-dark navbar-dark fixed-top'>
            <ul className='nav navtabs ml-auto'>
                <NavItem url='/'>Login</NavItem>
                <NavItem url='/register'>Register</NavItem>
                <NavItem url='/shopsite'>ShoppingSite</NavItem>
                <NavItem url='/tweet'>Tweets</NavItem>
                <NavItem url='/list'>FileList</NavItem>
            </ul>
        </nav>
    )
}
export default Navbar;