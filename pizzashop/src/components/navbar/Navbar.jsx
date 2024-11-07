import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
            id="ftco-navbar"
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <span className="flaticon-pizza-1 mr-1" />
                    Pizza
                    <br />
                    <small>Shop</small>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#ftco-nav"
                    aria-controls="ftco-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="oi oi-menu" /> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="menu.html" className="nav-link">
                                Menu
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="services.html" className="nav-link">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="blog.html" className="nav-link">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about.html" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact.html" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;