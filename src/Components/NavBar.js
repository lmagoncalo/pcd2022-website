import {Container, Nav, Navbar} from "react-bootstrap";
import * as React from "react";
import {Component} from "react";
import '../App.css';

class NavBar extends Component{
    render() {
        return (
            <Navbar id="navbar" className="noselect" variant="dark" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#">PCD@Coimbra 2022</Navbar.Brand>
                    <Nav className="justify-content-end" fill>
                        <Nav.Link href="https://www.facebook.com/pcdcoimbra">fb</Nav.Link>
                        <Nav.Link href="https://www.instagram.com/pcdcoimbra/">ig</Nav.Link>
                        <Nav.Link href="https://twitter.com/pcdcoimbra">tw</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        )
    }
}

export default NavBar;