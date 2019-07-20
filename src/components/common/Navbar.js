import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar () {
    return (
        <>
            <nav className="navbar is-fixed-top box-shadow" role="navigation" aria-label="main navigation">
                <div className="container">
                    {/*<div className="navbar-brand">*/}
                        {/*<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">*/}
                            {/*<span aria-hidden="true"></span>*/}
                            {/*<span aria-hidden="true"></span>*/}
                            {/*<span aria-hidden="true"></span>*/}
                        {/*</a>*/}
                    {/*</div>*/}
                    <div className="navbar-menu">
                        <Link to="/trips" className="navbar-item">Trips</Link>
                        <Link to="/" className="navbar-item main-logo">Travellers</Link>
                        <Link to="/blog" className="navbar-item">Blog</Link>
                    </div>
                </div>


            </nav>
        </>
    )
}
