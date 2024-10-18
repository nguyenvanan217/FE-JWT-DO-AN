import React, { useContext, useEffect, useState } from 'react';
import './Nav.scss';
import { NavLink, Redirect, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import imglogo from '../../assets/images/logo192.png';
const NavHeader = () => {
    const { user } = useContext(UserContext);
    const location = useLocation();
    if ((user && user.isAuthenticated === true) || location.pathname === '/') {
        return (
            <>
                {/* <div className="topnav">
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                    <NavLink to="/users">User</NavLink>
                    <NavLink to="/projects">Project</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div> */}
                <div className="nav-header">
                    <Navbar expand="lg" className="bg-body-tertiary bg-header">
                        <Container>
                            <img
                                src={imglogo}
                                alt=""
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            <Navbar.Brand className='brand-name' href="#home">TAT CODER</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink to="/" exact className="nav-link">
                                        Home
                                    </NavLink>
                                    <NavLink to="/users" className="nav-link">
                                        User
                                    </NavLink>
                                    <NavLink to="/projects" className="nav-link">
                                        Project
                                    </NavLink>
                                    <NavLink to="/about" className="nav-link">
                                        About
                                    </NavLink>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <Nav.Item className="nav-link">Welcome TAT CODER</Nav.Item>
                                    <NavDropdown title="Settings" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Change Password</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
        );
    } else {
        return <></>;
    }
};
export default NavHeader;
