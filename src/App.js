import {AVAILABLE_COLOURS, COOKIE_NAME, COOKIES_FADE_TIMEOUT, PATH} from "./params";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from "react";
import P5Wrapper from "./Components/P5Wrapper";
import {Component} from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import {Container} from "react-bootstrap";
import io from 'socket.io-client';
// import { socketID, socket } from './Components/socket';

var connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity",
    "timeout" : 10000,
    "transports" : ["websocket"]
};

let socket = io.connect('https://localhost:5000',connectionOptions);


class App extends Component {
    constructor(props) {
        super(props);

        let c = Math.round(Math.random()*(AVAILABLE_COLOURS.length-1));
        this.typoc = AVAILABLE_COLOURS[c];
    }

    componentWillUnmount() {
        this.socket.close();
        console.log("component unmounted");
    }

    componentDidMount() {
        var sensorEndpoint = "http://localhost:5000";
        this.socket = io.connect(sensorEndpoint, {
            reconnection: true,
            // transports: ['websocket']
        });
        console.log("component mounted");

        this.socket.on("new-pixel", data => {
            // this.drawOnCanvas(this.state.p5, data.x, data.y, data.color);
        });

        this.socket.on('draw-pixels', data => {
            console.log("AQUI, draw pixels");
            /*
            for (let i = 0; i < data.length; i++) {
                let pixel = data[i];
                // console.log(pixel);
                this.drawOnCanvas(this.state.p5, pixel.x, pixel.y, pixel.color);
            }
            */
        });

    }

    render () {
        return (
            <Container>
                <NavBar/>
                <Container>
                    <P5Wrapper
                        color={this.typoc} socket={socket}
                    />
                </Container>
                <Footer/>
            </Container>
        )
    }

}

export default App;
