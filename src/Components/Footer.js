import {Col, Nav, Navbar, Row} from "react-bootstrap";
import * as React from "react";
import {Component} from "react";
import {PATH} from "../params";


class Footer extends Component{
    render() {
        return (
            <Navbar id="footer" ref={this.refNav} className="header-outer" fixed="bottom" style={{backgroundColor: "#0000ff"}}>
                <Nav className="mr-auto w-100 header-inner">
                    <Col className="main-header" xs={8} sm={9} md={9} lg={6}>
                        <Nav.Link onClick={(e) => {this.openWrapper(e, PATH + 'about')}}>
                            <span ref={this.aboutRef}>About</span>
                        </Nav.Link>
                        {/*<Nav.Link onClick={(e) => this.openWrapper(e, '/exhibition')}>
                                        <span ref={this.refExhibition}>Exhibition</span>
                                    </Nav.Link>*/}
                    </Col>
                    <Col className="social" xs={4} sm={3} md={2} lg={6}>
                        <Row>
                            <Col className="social-item" sm={3} md={3} lg={6}/>
                            <Col className="social-item" xs={3} sm={1} md={3} lg={2}>
                                <Nav.Link href="https://www.facebook.com/pcdcoimbra">
                                    <span>fb</span>
                                </Nav.Link>
                            </Col>
                            <Col className="social-item" xs={3} sm={1} md={3} lg={2}>
                                <Nav.Link href="https://www.instagram.com/pcdcoimbra/">
                                    <span>ig</span>
                                </Nav.Link>
                            </Col>
                            <Col className="social-item" xs={3} sm={1} md={3} lg={2}>
                                <Nav.Link href="https://twitter.com/pcdcoimbra">
                                    <span>tw</span>
                                </Nav.Link>
                            </Col>
                        </Row>
                    </Col>
                </Nav>
            </Navbar>
        )
    }
}

export default Footer;