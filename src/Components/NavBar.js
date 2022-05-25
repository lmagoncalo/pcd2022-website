import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import * as React from "react";
import {Component} from "react";
import {PATH} from "../params";


class NavBar extends Component{
    render() {
        return (
            <Navbar id="navbar" variant="dark" style={{backgroundColor: "#FA165A", borderBottom: "1px solid white"}} fixed="top" ref={this.mainHeaderNav}>
                <Container fluid>
                    <Navbar.Brand href="#">Processing Community Day @ Coimbra 2022</Navbar.Brand>
                    <Nav className="justify-content-end" fill>
                        <Nav.Link href="https://www.facebook.com/pcdcoimbra">Fb</Nav.Link>
                        <Nav.Link href="https://www.instagram.com/pcdcoimbra/">IG</Nav.Link>
                        <Nav.Link href="https://twitter.com/pcdcoimbra">Tw</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        )
    }
}

export default NavBar;