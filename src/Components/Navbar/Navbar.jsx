import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="container max-w-7xl mx-auto flex justify-between p-3">
            <div className="nav-left"><a href="#">Rest Countries</a></div>
            <div className="nav-right">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Footer</a></li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;