import React, { useState } from 'react';
import { Link, HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Modal, Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, Dropdown, DropdownButton, Nav, Navbar, NavDropdown, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TypedReactHooksDemo from './TypedReactHooksDemo';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
    return (
        <div className="main">
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <TypedReactHooksDemo />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
        <Footer />
        </div>
    )
}

export default App
