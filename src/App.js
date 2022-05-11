import {AVAILABLE_COLOURS, COOKIE_NAME, COOKIES_FADE_TIMEOUT, PATH} from "./params";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from "react";
import P5Wrapper from "./Components/P5Wrapper";
import {Component} from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import {Container} from "react-bootstrap";
// import { socketID, socket } from './Components/socket';


class App extends Component {

    constructor(props) {
        super(props);

        let c = Math.round(Math.random()*(AVAILABLE_COLOURS.length-1));
        this.typoc = AVAILABLE_COLOURS[c];
    }

    render () {
        return (
            <Container>
                <NavBar/>
                <Container>
                    <P5Wrapper
                        color={this.typoc} //socket={socket}
                    />
                </Container>
                <Footer/>
            </Container>
        )
    }

}

export default App;
