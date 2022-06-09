import {Nav, Navbar} from "react-bootstrap";
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
            <Navbar fixed="bottom" id="footer" className="justify-content-center noselect">
                <Nav.Link onClick={this.openAbout} className="about_call_menu">
                    <span>About</span>
                </Nav.Link>
                <Nav.Link onClick={this.openCall} className="about_call_menu">
                    <span>Call</span>
                </Nav.Link>
            </Navbar>
        )
    }
}

export default Footer;