import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { withRouter } from "react-router";

const myNavbar = (props) => {
    const { location } = props;
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Brand href="/"><img src={`${require("../../../assets/images/thenaalogo.png")}`} height='40' width='70' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" activeKey={location.pathname}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(myNavbar)
