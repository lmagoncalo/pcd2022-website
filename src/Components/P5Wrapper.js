import React, {Component} from 'react';
import Sketch from 'react-p5';
import {AVAILABLE_COLOURS} from "../params";

export default class P5Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fill: props.color,
            width: 0,
            height: 0,
            n_width: 80,
            n_height: 20,
            socket: props.socket
        };
    }

    bkc = '#FFFFFF';
    placed = [{x: 13, y: 5}, {x: 13, y: 6}, {x: 13, y: 7}, {x: 13, y: 8}, {x: 13, y: 9}, {x: 13, y: 10}, {x: 13, y: 11}, {x: 14, y: 5}, {x: 15, y: 5}, {x: 16, y: 6}, {x: 16, y: 7}, {x: 15, y: 8}, {x: 14, y: 8}, {x: 18, y: 6}, {x: 19, y: 5}, {x: 20, y: 5}, {x: 18, y: 7}, {x: 18, y: 8}, {x: 18, y: 9}, {x: 18, y: 10}, {x: 19, y: 11}, {x: 20, y: 11}, {x: 21, y: 11}, {x: 21, y: 5}, {x: 23, y: 5}, {x: 23, y: 6}, {x: 23, y: 7}, {x: 23, y: 8}, {x: 23, y: 9}, {x: 23, y: 10}, {x: 23, y: 11}, {x: 24, y: 5}, {x: 24, y: 11}, {x: 25, y: 11}, {x: 26, y: 10}, {x: 26, y: 9}, {x: 26, y: 8}, {x: 26, y: 7}, {x: 25, y: 5}, {x: 26, y: 6}, {x: 31, y: 6}, {x: 32, y: 5}, {x: 33, y: 5}, {x: 34, y: 6}, {x: 34, y: 7}, {x: 33, y: 8}, {x: 32, y: 8}, {x: 31, y: 9}, {x: 31, y: 10}, {x: 32, y: 11}, {x: 33, y: 11}, {x: 34, y: 11}, {x: 36, y: 10}, {x: 37, y: 11}, {x: 38, y: 11}, {x: 39, y: 10}, {x: 37, y: 5}, {x: 38, y: 5}, {x: 39, y: 6}, {x: 36, y: 6}, {x: 36, y: 7}, {x: 36, y: 8}, {x: 36, y: 9}, {x: 39, y: 7}, {x: 39, y: 8}, {x: 39, y: 9}, {x: 41, y: 6}, {x: 42, y: 5}, {x: 43, y: 5}, {x: 44, y: 6}, {x: 44, y: 7}, {x: 43, y: 8}, {x: 42, y: 8}, {x: 41, y: 9}, {x: 41, y: 10}, {x: 42, y: 11}, {x: 43, y: 11}, {x: 44, y: 11}, {x: 46, y: 9}, {x: 46, y: 10}, {x: 47, y: 11}, {x: 48, y: 11}, {x: 49, y: 11}, {x: 47, y: 8}, {x: 48, y: 8}, {x: 49, y: 7}, {x: 49, y: 6}, {x: 48, y: 5}, {x: 47, y: 5}, {x: 46, y: 6}];

    componentDidMount() {
        // this.setSocketListeners();
    }

    setSocketListeners () {
        this.state.socket.on("new-pixel", data => {
            this.drawOnCanvas(this.state.p5, data.x, data.y, data.color);
        });

        this.state.socket.on('draw-pixels', data => {
            console.log("AQUI, draw pixels");
            for (let i = 0; i < data.length; i++) {
                let pixel = data[i];
                // console.log(pixel);
                this.drawOnCanvas(this.state.p5, pixel.x, pixel.y, pixel.color);
            }
        });
    }

    setup = (p5, canvasParentRef) => {
        let navbar = document.getElementById("navbar");
        //let footer = document.getElementById("footer");

        // let availableHeight = p5.windowHeight - (navbar.offsetHeight + footer.offsetHeight);
        let x_cell_size = parseInt(p5.windowWidth / this.state.n_width);
        let y_cell_size = x_cell_size;
        let canvas_height = (y_cell_size * this.state.n_height);

        this.setState({width: p5.windowWidth});
        this.setState({height: canvas_height});
        this.setState({p5: p5});
        let canvas = p5.createCanvas(p5.windowWidth, canvas_height).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)

        canvas.position(0, navbar.offsetHeight);

        this.setState({cell_width: x_cell_size});
        this.setState({cell_height: y_cell_size});

        for(let i=0; i<this.placed.length; i+=1){
            this.placed[i].color = AVAILABLE_COLOURS[Math.round(Math.random()*(AVAILABLE_COLOURS.length-1))];
        }

        for(let i=0;i<10;i+=1){
            this.placed.push({x: parseInt(p5.random(this.state.n_width)), y: parseInt(p5.random(this.state.n_height)), color: AVAILABLE_COLOURS[Math.round(Math.random()*(AVAILABLE_COLOURS.length-1))]})
        }
    };

    draw = (p5) => {
        p5.background('#dddddd');

        for(let i=0; i<this.placed.length; i+=1){
            this.drawOnCanvas(p5, this.placed[i].x, this.placed[i].y, this.placed[i].color);
        }

        if ((0 <= p5.mouseX <= this.state.height)){
            let x = Math.floor(p5.mouseX / this.state.cell_width);
            let y = Math.floor(p5.mouseY / this.state.cell_height);
            this.drawOnCanvas(p5, x, y, this.state.fill + '77');
        }
    };

    drawOnCanvas = (p5, x, y, color) => {
        p5.push();
        p5.noStroke();
        p5.fill(color);
        p5.rect(x * this.state.cell_width, y * this.state.cell_height, this.state.cell_width, this.state.cell_height);
        p5.pop();
    };


    mouseClicked = p5 => {
        if(p5.mouseButton === 'right') {

        } else if(p5.mouseButton === 'left') {
            let x = Math.floor(p5.mouseX / this.state.cell_width);
            let y = Math.floor(p5.mouseY / this.state.cell_height);

            // this.drawOnCanvas(p5, x, y, this.state.fill);
            this.placed.push({x: x, y: y, color: this.state.fill});
            // this.state.socket.emit('pixel-place', {'x': x, 'y': y, 'color':this.state.fill});
        }

    };

    clean = p5 => {
        p5.background(this.bkc);
    };

    render() {
        return <Sketch className='p5-wrapper' setup={this.setup} draw={this.draw} mouseClicked={this.mouseClicked}/>;
    }

}

