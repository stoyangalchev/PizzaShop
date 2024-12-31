import React, { useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
    const cartLength = useSelector((state) => state.cart.cart.length);
    const collapseRef = useRef(null);

    const handleNavLinkClick = () => {
        if (collapseRef.current) {
            const collapseElement = new window.bootstrap.Collapse(collapseRef.current);
            collapseElement.hide();
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (collapseRef.current && collapseRef.current.classList.contains('show')) {
                const collapseElement = new window.bootstrap.Collapse(collapseRef.current);
                collapseElement.hide();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                <div className="collapse navbar-collapse" id="ftco-nav" ref={collapseRef}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavLinkClick}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/menu" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavLinkClick}>
                                Menu
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavLinkClick}>
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavLinkClick}>
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavLinkClick}>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavLinkClick}>
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cart" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={handleNavLinkClick}>
                                <i className="fas fa-shopping-cart"></i> Cart
                                {cartLength > 0 && (
                                    <span className="badge">{cartLength}</span>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;