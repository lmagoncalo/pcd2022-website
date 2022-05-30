import React, { Component } from 'react';
import { Row, Col, Image} from 'react-bootstrap';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {}
        // this.path = '/2022/';
        this.path = '/';

        this.dei = {
            default: process.env.PUBLIC_URL + "/media/dei-logo.png",
            hover:process.env.PUBLIC_URL + "/media/dei-logo-hover.png"
        }

        this.cisuc = process.env.PUBLIC_URL + "/media/cisuc-logo.png";
    }

    render() {
        return (
            <section className="about-inner" >
                <p className="title_div">About</p>
                <div>
                    <p>The Processing Community Day initiative is supported by the <a href="https://processingfoundation.org/" target="_blank" rel="noreferrer">Processing Foundation</a> and has the goal of celebrating art, code and diversity while promoting creative coding and computational thinking as tools for creative students, researchers and professionals.</p>
                    <p>PCD@Coimbra aims at being a showcase for what is currently being developed in Portugal, especially in Coimbra, and also a place for stimulating discussion and initiating future collaborations.</p>
                    <p>In 2022, PCD@Coimbra includes workshops, exhibitions and talk sessions.</p>
                    {/* <p>Participation in all events of PCD@Coimbra 2022 is free, but registration in workshops and talks session is required (register <a href="https://www.eventbrite.com/e/processing-community-daycoimbra-2021-tickets-217130562357">here</a>).</p> */}
                    <p>We warmly welcome all people who are interested in creative coding, both from the local and the external community. Be free to join us. </p>

                    <p>Subscribe our newsletter <a href="http://pcdcoimbra.dei.uc.pt/2021/newsletter">here.</a></p>
                </div>
                <div className="sub_topic">
                    <h4 className="sub_title_div">Main Location</h4>
                    <p className="no-m">Departamento de Engenharia Informática</p>
                    <p className="no-m">Faculdade de Ciências e Tecnologia</p>
                    <p className="no-m">Universidade de Coimbra</p>
                    <p className="no-m">Pólo II - Pinhal de Marrocos</p>
                    <p className="no-m">3030-290 Coimbra</p>
                    <p className="no-m">Portugal</p>
                    <p><a
                        href="https://www.google.com/maps/place/DEI+-+Department+of+Computer+Science+-+FCTUC/@40.1909526,-8.4205799,15z/data=!4m5!3m4!1s0xd22f9952aaf6517:0xd3822ec1d359eb52!8m2!3d40.1864288!4d-8.4161029?shorturl=1"
                        target="_blank" rel="noreferrer">40.186421, -8.415976</a></p>
                </div>
                <div className="sub_topic">
                    <h4 className="sub_title_div">Contacts</h4>
                    <p>
                        <a href="mailto:pcdcoimbra@dei.uc.pt" target="_top" rel="noopener noreferrer">pcdcoimbra(at)dei.uc.pt</a><br/>
                    </p>
                </div>
                <div className="sub_topic">
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
                    <h4 className="sub_title_div">Previous editions</h4>
                    <p>
                        <a href="http://pcdcoimbra.dei.uc.pt/2021/">PCD@Coimbra 2021</a><br/>
                        <a href="http://pcdcoimbra.dei.uc.pt/2020/">PCD@Coimbra 2020</a>
                    </p>
                </div>
                <div className="sub_topic">
                    <Row>
                        <Col xs={9} sm={7}>
                            <p className="small"><b>PDC @ Coimbra 2022 is organised by</b></p>
                            <a href="https://www.uc.pt/fctuc/dei">
                                <Image src={this.cisuc} fluid/>
                            </a>
                        </Col>
                    </Row>
                    <Row>
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