import React, {Component} from "react";
import {AVAILABLE_COLOURS} from "./params";

class NotFound extends Component {

    constructor(props) {
        super(props);
        this.ga = props.ga;

        // colour
        let c = Math.round(Math.random()*(AVAILABLE_COLOURS.length-1));
        this.typoc = AVAILABLE_COLOURS[c];
    }

    componentDidMount() {}

    render () {
        return (
            <div style={{"--c-typography": this.typoc}}>
                <div className="highlight-outer not-found-info">
                    <div className="highlight-inner">
                        <div className="info">
                            <h2>404: Page Not found</h2>
                            <p className="m2">&nbsp;</p>
                            <p className="mixed-case">Upsi. You're not supposed to be here. 🤭</p>
                            <p className="mixed-case">Try go back to the PCD@Coimbra 2022&nbsp;<a href="http://pcdcoimbra.dei.uc.pt">home page</a>&nbsp;or visit the&nbsp;<a href="http://pcdcoimbra.dei.uc.pt/2021">last edition website</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;