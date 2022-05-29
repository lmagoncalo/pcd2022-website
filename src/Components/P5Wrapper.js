import React, {Component} from 'react';
import Sketch from 'react-p5';

export default class P5Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fill: props.color,
            n_width: 100,
            n_height: 45,
            socket: props.socket,
            isEnabled: props.isEnabled,
        };
    }

    bkc = '#FFFFFF';

    componentDidMount() {
        // this.setSocketListeners();
    }

    setSocketListeners () {
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
        this.setState({width: p5.windowWidth});
        this.setState({p5: p5});

        let navbar = document.getElementById("navbar");
        let footer = document.getElementById("footer");

        // let availableHeight = p5.windowHeight - (navbar.offsetHeight + footer.offsetHeight);
        let cell_size_x = p5.windowWidth / this.state.n_width;
        this.setState({cell_width: cell_size_x});

        let canvas_height =  p5.windowHeight - (navbar.offsetHeight + footer.offsetHeight);
        console.log(canvas_height / this.state.n_height, parseInt(canvas_height / this.state.n_height))
        let cell_size_y = canvas_height / this.state.n_height;
        this.setState({cell_height: cell_size_y});

        let canvas = p5.createCanvas(p5.windowWidth, canvas_height).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)

        canvas.position(0, navbar.offsetHeight);

        /*
        for(let i=0; i<this.placed.length; i+=1){
            this.placed[i].color = AVAILABLE_COLOURS[Math.round(Math.random()*(AVAILABLE_COLOURS.length-1))];
        }

        for(let i=0;i<10;i+=1){
            this.placed.push({x: parseInt(p5.random(this.state.n_width)), y: parseInt(p5.random(this.state.n_height)), color: AVAILABLE_COLOURS[Math.round(Math.random()*(AVAILABLE_COLOURS.length-1))]})
        }
        */
        p5.background(this.bkc);
    };

    draw = (p5) => {
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
        p5.rect(x * this.state.cell_width, y * this.state.cell_height, this.state.cell_width, this.state.cell_height, this.state.cell_width*0.3 );
        p5.pop();
    };


    mouseReleased = p5 => {
        if(p5.mouseButton === 'right') {

        } else if(p5.mouseButton === 'left' && this.state.isEnabled()) {
            let x = Math.floor(p5.mouseX / this.state.cell_width);
            let y = Math.floor(p5.mouseY / this.state.cell_height);

            this.drawOnCanvas(p5, x, y, this.state.fill);
            // this.state.socket.emit('pixel-place', {'x': x, 'y': y, 'color':this.state.fill});
            // console.log(x, y);
        }
    };

    clean = p5 => {
        p5.background(this.bkc);
    };

    render() {
        return <Sketch className='p5-wrapper' setup={this.setup} mouseReleased={this.mouseReleased}/>;
    }

}

