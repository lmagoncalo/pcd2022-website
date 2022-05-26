// import {AVAILABLE_COLOURS, COOKIE_NAME, COOKIES_FADE_TIMEOUT, PATH} from "./params";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from "react";
import P5Wrapper from "./Components/P5Wrapper";
import {Component} from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import {Container, Offcanvas} from "react-bootstrap";
import About from "./Components/About";
import Call from "./Components/Call";
// import { socket } from './Components/socket';
import {AVAILABLE_COLOURS} from "./params";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            top: "",
            showAbout: false,
            showCall: false,
            enabled: true,
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
        console.log(navbar.offsetHeight);

        this.setState({top: navbar.offsetHeight + "px"});
        this.setState({bottom: footer.offsetHeight + "px"});
    }

    render () {
        return (
            <Container>
                <NavBar/>
                <Container style={{marginTop: this.state.top, marginBottom: this.state.bottom}}>
                    <Offcanvas className="about_call_div" style={{marginTop: this.state.top, marginBottom: this.state.bottom}} show={this.state.showAbout} onHide={this.openAbout} backdrop={false} placement={'start'} >
                        <Offcanvas.Header closeButton disabled/>

                        <Offcanvas.Body>
                            <About/>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Offcanvas className="about_call_div" style={{marginTop: this.state.top, marginBottom: this.state.bottom}} show={this.state.showCall} onHide={this.openCall} backdrop={false} placement={'end'}>
                        <Offcanvas.Header variant='custom' closeButton/>
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

/*
<P5Wrapper
                        color={this.typoc} // socket={socket}
                    />
 */

export default App;
