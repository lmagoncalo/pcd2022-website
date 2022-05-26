import React, { Component } from 'react';
import { Row, Col, Image} from 'react-bootstrap';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {}
        // this.path = '/2022/';
        this.path = '/';

        this.dei = {
            default: process.env.PUBLIC_URL + this.path + "dei-logo.png",
            hover:process.env.PUBLIC_URL + this.path + "dei-logo-hover.png"
        }

        this.cisuc = process.env.PUBLIC_URL + this.path + "cisuc-logo.png";
    }

    render() {
        return (
            <section className="about-inner" >
                <p className="title_div">About</p>
                <div className="about-into">
                    <p>The Processing Community Day initiative is supported by the Processing Foundation and has the
                        goal of fostering programming and creative coding as tools among students, researchers and
                        professionals.
                    </p>

                    <p>
                        PCD@Coimbra aims at being a showcase for what is currently being developed in Portugal and also
                        a place for stimulating discussion and initiating future collaborations.
                    </p>
                    <p>Subscribe our newsletter <a href="https://mailchi.mp/c04373c6b862/pcdcoimbra" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">Location</h4>
                    <p>
                        Departamento de Engenharia Informática<br/>
                        Faculdade de Ciências e Tecnologia <br/>
                        Universidade de Coimbra<br/>
                        Pólo II - Pinhal de Marrocos<br/>
                        3030-290 Coimbra <br/>
                        Portugal<br/>
                        <a href="https://goo.gl/maps/LzxChBj7hqr1KsH99" target="_blank" rel="noopener noreferrer">40.186421, -8.415976</a>
                    </p>
                </div>
                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">Contacts</h4>
                    <p>
                        <a href="mailto:pcdcoimbra@dei.uc.pt" target="_top" rel="noopener noreferrer">pcdcoimbra@dei.uc.pt</a><br/>
                    </p>
                </div>
                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">Organising Committee</h4>
                    <p>
                        <a href="https://cdv.dei.uc.pt/authors/jessica-parente/" >Jéssica Parente</a><br/>
                        <a href="https://cdv.dei.uc.pt/authors/luis-goncalo/" >Luís Gonçalo</a><br/>
                        <a href="https://cdv.dei.uc.pt/authors/joao-cunha/"> João Miguel Cunha</a><br/>
                        <a href="https://cdv.dei.uc.pt/authors/pedro-silva/" >Pedro Silva</a><br/>
                        <a href="https://sergiorebelo.work">Sérgio Rebelo</a><br/>
                        <a href="https://cdv.dei.uc.pt/authors/tiago-martins/">Tiago Martins</a><br/>
                        <a href="https://cdv.dei.uc.pt/authors/penousal-machado/">Penousal Machado</a><br/>
                    </p>
                </div>
                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">Similar events</h4>
                    <p>
                        <a href="https://pcd.fba.up.pt/2020/">PCD @ Porto</a><br/>
                        <a href="http://processing.ideiarxd.com/">PCD @ Lisbon</a>
                    </p>
                </div>
                <div className="sub_topic s-t">
                    <Row className="s-b">
                        <Col xs={9} sm={7}>
                            <p className="small"><b>PDC @ Coimbra 2022 is organised by</b></p>
                            <a className="not-underline" href="https://www.uc.pt/fctuc/dei">
                                <Image src={this.cisuc} fluid/>
                            </a>
                        </Col>
                    </Row>
                    <Row className="s-t">
                        <Col xs={7} sm={5}>
                            <p className="small"><b>With support of</b></p>
                            <a className="not-underline" href="https://www.uc.pt/fctuc/dei">
                                <Image src={this.dei.default}
                                       onMouseOver={e => (e.currentTarget.src = this.dei.hover)}
                                       onMouseOut={e => (e.currentTarget.src = this.dei.default)}
                                       fluid/>
                            </a>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}

export default About;