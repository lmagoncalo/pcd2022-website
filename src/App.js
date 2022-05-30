// import {AVAILABLE_COLOURS, COOKIE_NAME, COOKIES_FADE_TIMEOUT, PATH} from "./params";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from "react";
import P5Wrapper from "./Components/P5Wrapper";
import {Component} from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import {Button, Container, Offcanvas} from "react-bootstrap";
import About from "./Components/About";
import Call from "./Components/Call";
// import { socket } from './Components/socket';
import {AVAILABLE_COLOURS} from "./params";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            top: "",
            showAbout: (this.props.showAbout !== undefined ? this.props.showAbout : false),
            showCall: (this.props.showCall !== undefined ? this.props.showCall : false),
            color: AVAILABLE_COLOURS[Math.floor(Math.random()*AVAILABLE_COLOURS.length)]
        };

        // change colour of header in responsive
        document.documentElement.style.setProperty('--main-color', this.state.color);

        this.openAbout = this.openAbout.bind(this);
        this.openCall = this.openCall.bind(this);
        this.isEnabled = this.isEnabled.bind(this);
    }

    isEnabled() {
        return (!this.state.showAbout && !this.state.showCall);
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

        this.setState({top: navbar.offsetHeight + "px"});
        this.setState({bottom: footer.offsetHeight + "px"});
    }

    render () {
        return (
            <Container>
                <NavBar/>
                <Container>
                    <Offcanvas className="about_call_div" style={{marginTop: this.state.top, marginBottom: this.state.bottom}} show={this.state.showAbout} backdrop={false} placement={'start'} >
                        <Offcanvas.Header style={{paddingTop: 0}}><Button variant="link" style={{textDecoration:"none", fontSize:"3rem", width:"fit-content", color: "var(--main-color)", padding: 0}} onClick={this.openAbout}>✕</Button></Offcanvas.Header>

                        <Offcanvas.Body>
                            <About/>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Offcanvas className="about_call_div" style={{marginTop: this.state.top, marginBottom: this.state.bottom}} show={this.state.showCall} backdrop={false} placement={'end'}>
                        <Offcanvas.Header style={{paddingTop: 0}}><Button variant="link" style={{textDecoration:"none", fontSize:"3rem", width:"fit-content", color: "var(--main-color)", padding: 0}} onClick={this.openCall}>✕</Button></Offcanvas.Header>
                        <Offcanvas.Body>
                            <Call/>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <P5Wrapper isEnabled={this.isEnabled}
                        color={this.state.color} // socket={socket}
                    />
                </Container>
                <Footer openAbout={this.openAbout} openCall={this.openCall}/>
            </Container>
        )
    }
}

export default App;
