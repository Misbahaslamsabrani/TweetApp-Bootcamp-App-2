import React from 'react';
import {NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="blue lighten-1"><div className="container">
        <div className="brand-logo">Tweet App</div>
        <ul className="right">
            <li><NavLink to="/">All Tweets</NavLink></li>
            <li><NavLink to="/newTweet">New Tweet</NavLink></li>
        </ul>
        </div>
        </nav>
    );
}

export default NavBar;