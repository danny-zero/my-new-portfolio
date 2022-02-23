import React, { useState, useRef } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import cx from 'classnames'; //A javaScript utility for conditionally joining classNames together
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css/navbar.module.css';

const NavBar = () => {

    return (
       <Navbar collapseOnSelect expand="lg" bg="none" variant="dark">
            <Navbar.Brand href="/" className={styles.logo}>D</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.toggler}/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav className={styles.navigationAnimation}>
                    <Nav.Link className={styles.navLink} href="#/about">About</Nav.Link>
                    <Nav.Link className={styles.navLink} href="#/projects">Projects</Nav.Link>
                    <Nav.Link className={styles.navLink} href="https://www.dannylphotography.com" target="_blank">Photography</Nav.Link>
                    {/* <Nav>
                    <NavDropdown title="Photography" id="collasible-nav-dropdown" className={styles.navLink}>
                        <NavDropdown.Item href="https://www.dannylphotography.com/pages/japan.html" target="_blank"
                    rel="noopener noreferrer">Japan</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.dannylphotography.com/pages/nyc.html" target="_blank"
                    rel="noopener noreferrer">New York</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.dannylphotography.com/pages/vegas.html" target="_blank"
                    rel="noopener noreferrer">Nevada</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.dannylphotography.com/" target="_blank"
                    rel="noopener noreferrer">Photography Home</NavDropdown.Item>
                    </NavDropdown>
                    </Nav> */}
                    <Nav.Link className={styles.navLink} href="#/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar