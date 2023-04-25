import React from 'react';
import Logo from '../../images/Logo.svg';
import './header.css';

const Header = () => {
    return (
        <nav className='align-center'>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="nav-link">
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>
            </div>
        </nav>
    );
};

export default Header;