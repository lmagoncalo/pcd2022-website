import {AVAILABLE_COLOURS, COOKIE_NAME, COOKIES_FADE_TIMEOUT, PATH} from "./params";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from "react";
import P5Wrapper from "./Components/P5Wrapper";
import {Component} from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import {Col, Container, Modal, Offcanvas, Row} from "react-bootstrap";
import About from "./Components/About";
import Call from "./Components/Call";
import AnimateHeight from "react-animate-height";
// import { socketID, socket } from './Components/socket';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            top: "",
            showAbout: false,
            showCall: false,

        };

        this.openAbout = this.openAbout.bind(this);
        this.openCall = this.openCall.bind(this);
    }

    openAbout() {
        const showAbout = this.state.showAbout;
        this.setState({
            showAbout: !showAbout
        });
    }

    openCall() {
        const showCall = this.state.showCall;
        this.setState({
            showCall: !showCall
        });
    }

    componentWillUnmount() {
        // this.socket.close();
        console.log("Component Unmounted");
    }

    componentDidMount() {
        let navbar = document.getElementById("navbar");
        let footer = document.getElementById("footer");
        console.log(navbar.offsetHeight);

        this.setState({top: navbar.offsetHeight + "px"});
        this.setState({bottom: footer.offsetHeight + "px"});
    }

    render () {
        const showAbout = this.state.showAbout;
        const showCall = this.state.showCall;
        const p5height = window.innerHeight - (this.state.top + this.state.bottom);
        return (
            <Container>
                <NavBar/>
                <Container style={{marginTop: this.state.top, marginBottom: this.state.bottom, background: "#00ff00"}}>
                    <Offcanvas show={this.state.showAbout} onHide={this.openAbout} backdrop={false} placement={'start'} style={{marginTop: this.state.top, marginBottom: this.state.bottom, width: "50%"}}>
                        <Offcanvas.Header closeButton/>
                        <Offcanvas.Body>
                            <About/>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Offcanvas show={this.state.showCall} onHide={this.openCall} backdrop={false} placement={'end'} style={{marginTop: this.state.top, marginBottom: this.state.bottom, width: "50%"}}>
                        <Offcanvas.Header closeButton/>
                        <Offcanvas.Body>
                            <Call/>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <P5Wrapper
                        color={"#ff0000"} height={p5height} // socket={socket}
                    />
                    <div style={{position:"fixed"}}>Ola o meu nome é Julia.</div>
                </Container>
                <Footer openAbout={this.openAbout} openCall={this.openCall}/>
            </Container>
        )
    }
}

/*
<P5Wrapper
                        color={this.typoc} // socket={socket}
                    />
 */

export default App;
