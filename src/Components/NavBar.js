import {Col, Nav, Navbar} from "react-bootstrap";
import * as React from "react";
import {Component} from "react";
import {PATH} from "../params";


class NavBar extends Component{
    render() {
        return (
            <Navbar id="navbar" ref={this.mainHeaderNav} className="main-header-outer" fixed="top" style={{backgroundColor: "#ff0000"}}>
                <Nav className="mr-auto w-100 main-header-inner">
                    <Col xs={12} sm={9} md={9} lg={9}>
                        <h1>
                            <Nav.Link href={PATH} className="not-underline">
                                <span className="not-underline">PCD@Coimbra 2022</span>
                            </Nav.Link>
                        </h1>
                    </Col>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar;