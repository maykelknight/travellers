import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar () {
    return (
        <>
            <nav className="navbar is-success is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">

                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                        </a>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link to="/" className="navbar-item">Home</Link>
                            <Link to="/trips" className="navbar-item">Trips</Link>
                        </div>
                    </div>
                </div>


            </nav>
        </>
    )
}
