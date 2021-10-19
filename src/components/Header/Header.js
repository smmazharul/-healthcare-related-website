import React, { useState } from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {AllContexts, selectedService}= useAuth();
    const {user,logOut}=AllContexts;
    const {displayName,email,photoURL}=user;
    return (
        <div>
            <Navbar className='sticky="top" '  expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold  text-white">HM <span style={{color:"#65E6FA"}}>Health Care</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto ">
                    <Nav.Link as={NavLink}  to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>

                    <Nav.Link as={NavLink} to="/service">Service</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    <Nav.Link as={NavLink} to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> <Badge bg="info">{selectedService.length}</Badge></Nav.Link>

                    {!user.displayName ?(<>
                    <Nav.Link as={NavLink} style={{fontWeight:'900'}} to="/login">Login/Sign Up</Nav.Link>

                    </>):(
                       <>
                       <span className="user-name"><img src={photoURL}  alt="" /></span>
                       <button onClick={logOut} className="log-btn">Log Out</button></>
                    )}


                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;