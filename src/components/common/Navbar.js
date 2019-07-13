import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/img/logo.png';

export default function Navbar () {
    return (
        <>
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="container">
                    {/*<div className="navbar-brand">*/}
                        {/*<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">*/}
                            {/*<span aria-hidden="true"></span>*/}
                            {/*<span aria-hidden="true"></span>*/}
                            {/*<span aria-hidden="true"></span>*/}
                        {/*</a>*/}
                    {/*</div>*/}
                    <div className="navbar-menu">
                        <Link to="/" className="navbar-item">Home</Link>
                        <Link to="/" className="navbar-item main-logo">
                            Travellers
                        </Link>
                        <Link to="/trips" className="navbar-item">Trips</Link>
                    </div>
                </div>


            </nav>
        </>
    )
}
