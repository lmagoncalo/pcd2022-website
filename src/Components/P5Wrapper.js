import React, {Component} from 'react';
import Sketch from 'react-p5';
// import {getCookie, setCookie} from "./utils";
// import {COOKIE_NAME, COOKIES_FADE_TIMEOUT} from "../params";

export default class P5Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fill: props.color,
            n_width: 160,
            n_height: 70,
            socket: props.socket,
            isEnabled: props.isEnabled,
            lastPixel: null,
        };
    }

    bkc = '#FFFFFF';

    componentDidMount() {
        this.setSocketListeners();
    }

    setSocketListeners () {
        this.state.socket.on("remove-pixel", data => {
            this.removeFromCanvas(this.state.p5, data.x, data.y);
        });

        this.state.socket.on("new-pixel", data => {
            this.drawOnCanvas(this.state.p5, data.x, data.y, data.color);
        });

        this.state.socket.on('draw-pixels', data => {
            for (let i = 0; i < data.length; i++) {
                let pixel = data[i];
                // console.log(pixel);
                this.drawOnCanvas(this.state.p5, pixel.x, pixel.y, pixel.color);
            }
        });
    }

    setup = (p5, canvasParentRef) => {
        this.setState({p5: p5});

        let navbar = document.getElementById("navbar");
        let footer = document.getElementById("footer");

        let canvas_height =  p5.windowHeight - (navbar.offsetHeight + footer.offsetHeight);
        let cell_size = Math.floor(canvas_height * 0.03);

        this.setState({cell_size: cell_size});

        let canvas = p5.createCanvas(this.state.n_width * cell_size, (this.state.n_height * cell_size) + footer.offsetHeight).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)

        canvas.position(0, navbar.offsetHeight);

        let max_x = (this.state.n_width * cell_size) - p5.windowWidth;
        let max_y = (this.state.n_height * cell_size) - (p5.windowHeight - (navbar.offsetHeight + footer.offsetHeight));
        let random_x = p5.random(0, max_x);
        let random_y = p5.random(0, max_y);
        window.scrollTo(random_x, random_y);

        p5.background(this.bkc);
    };

    drawOnCanvas = (p5, x, y, color) => {
        p5.push();
        p5.noStroke();
        p5.fill(color);
        p5.rect(x * this.state.cell_size, y * this.state.cell_size, this.state.cell_size, this.state.cell_size, this.state.cell_size*0.3 );
        p5.pop();
    };

    removeFromCanvas = (p5, x, y) => {
        p5.push();
        p5.noStroke();
        p5.fill(255);
        p5.rect(x * this.state.cell_size, y * this.state.cell_size, this.state.cell_size, this.state.cell_size);
        p5.pop();
    };


    mouseReleased = p5 => {
        /*
        let t = getCookie(COOKIE_NAME);
        if (t !== undefined){
            if ((Date.now() - t) < 5000){
                return;
            }
        }
        */

        if(p5.mouseButton === 'left' && this.state.isEnabled()) {
            let x = Math.floor(p5.mouseX / this.state.cell_size);
            let y = Math.floor(p5.mouseY / this.state.cell_size);

            // If equals last pixel
            if (this.state.lastPixel !== null && this.state.lastPixel[0] === x && this.state.lastPixel[1] === y){
                this.removeFromCanvas(p5, x, y);
                this.state.socket.emit('pixel-remove', {'x': x, 'y': y});
                this.setState({lastPixel: null});
            } else {
                this.drawOnCanvas(p5, x, y, this.state.fill);
                // console.log(x, y);
                this.state.socket.emit('pixel-place', {'x': x, 'y': y, 'color':this.state.fill});
                // setCookie(COOKIE_NAME, Date.now(), COOKIES_FADE_TIMEOUT);
                this.setState({lastPixel: [x, y]});
            }

        }
    };

    touchEnded = p5 => {
        return;
    }

    clean = p5 => {
        p5.background(this.bkc);
    };

    render() {
        return <Sketch className='p5-wrapper' setup={this.setup} mouseReleased={this.mouseReleased} touchEnded={this.touchEnded}/>;
    }
}

