import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";

function Menu() {
    return (
        <Navbar bg="dark" variant="dark" sticky={"top"}>
            <Container>
                <Navbar.Brand href="#home">Garrett Rudisill</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>Features coming soon</Nav.Link>
                    {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                    {/*<Nav.Link href="#Blog">Blog</Nav.Link>*/}
                    {/*<Nav.Link href="#About">About</Nav.Link>*/}
                </Nav>
            </Container>
        </Navbar>
        );
}

export default Menu;