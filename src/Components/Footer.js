import {Container, Nav, Navbar} from "react-bootstrap";
import * as React from "react";
import {Component} from "react";


class Footer extends Component{
    constructor(props) {
        super(props);
        this.openAbout = props.openAbout;
        this.openCall = props.openCall;
    }

    render() {
        return (
            <Navbar fixed="bottom" id="footer" className="justify-content-center" style={{backgroundColor: "#FA165A", borderTop: "1px solid white"}}>
                <Nav.Link onClick={this.openAbout} style={{ width: "50%", textAlign: "center", color:"#ffffff"}}>
                    <span>About</span>
                </Nav.Link>
                <Nav.Link onClick={this.openCall} style={{width: "50%", textAlign: "center", color:"#ffffff"}}>
                    <span>Call</span>
                </Nav.Link>
            </Navbar>
        )
    }
}

export default Footer;