import React, { Component } from 'react';


class Call extends Component {
    constructor(props) {
        super(props);

        // this.path = '/2022/';
        this.path = '/';

        this.state = {
            url: process.env.PUBLIC_URL + "/pcd_poster_25_brief_regulation.pdf",
        }
    }

    render() {
        return (

            <section className="call-inner" style={{color: "var(--main-color)"}}>
                <p className="title_div">Call for Posters</p>
                <div className="call-into">
                    <p>
                        The Processing Community Day @  Coimbra 2022 is accepting posters submissions on
                        the theme <b>“25” (the number 25)</b>. This call for posters is open to students, researchers
                        and
                        professionals. The selected posters will be exhibited during the PCD@Coimbra {/*that will take
                        place on 1st April 2020*/} in the Department of Informatics Engineering of Faculty of Sciences and
                        Technology of University of Coimbra.</p>
                </div>
                <div className="sub_topic s-t">
                    <h4 className="sub_title_div"><b>Requirements</b></h4>
                    <p>
                        The participant should produce a poster on the theme "25".
                    </p>
                    <p>
                        The participants should also use code (any programming language)
                        in at least one stage of the poster design process. Code can be used either to produce materials
                        (for example images) or in the final generation (generating a poster using code).
                    </p>
                    <p>
                        Provided that you fulfill these requirements, you are allowed to use any material or technique
                        (illustration, typographic approaches, etc.). You may use any content of your choosing (i.e. you
                        can make use of one word, many words or even no words at all).
                    </p>
                </div>
                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">Materials</h4>
                    <p>In addition to completing all the fields of the online form, you are required to submit the
                        following materials:</p>
                    <ul>
                        <li><b>Brief description of your project</b> (max. 500 characters) describing the concept and clearly
                            stating how computer code was used, either in the process or for the final generation. We
                            accept descriptions in Portuguese and English (preferred language);
                        </li>
                        <li>
                            <b>A2 Poster file</b> (420mm x 594mm) in portrait orientation (PDF file, 300 DPI, Color profile: CMYK)
                        </li>
                    </ul>
                </div>
                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">Submission</h4>
                    <p>Submissions must be uploaded using the online <a href="https://forms.gle/eBWQCi9JWskwpYzs8">form</a>.</p>
                    <p><b>Deadline</b><br/><span className="line-through">15th March 2020 (23:59 UTC)</span><br/>25th March 2020 (23:59 UTC)</p>
                    <p><b>Submission form link</b><br/><a href="https://forms.gle/eBWQCi9JWskwpYzs8" target="_blank" rel="noopener noreferrer">https://forms.gle/eBWQCi9JWskwpYzs8</a></p>
                </div>
                <div className={"sub_topic s-t"}>
                    <p>
                        Before submitting, participants should read the <a href={this.state.url} target="_blank" rel="noopener noreferrer" >brief document,</a> which contains
                        detailed information about the call and can be downloaded <a href={this.state.url} target="_blank" rel="noopener noreferrer" >here</a>.

                    </p>
                </div>
                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">Jury</h4>
                    <p>
                        Artur Rebelo, <a href="https://www.r2design.pt/" target="_blank" rel="noopener noreferrer">R2 Design</a><br/>
                        João Bicker, <a href="https://www.fba.pt/" target="_blank" rel="noopener noreferrer">FBA</a><br/>
                        Luís Lucas Pereira, <a href="https://mariaadelaide.com/" target="_blank" rel="noopener noreferrer">Maria Adelaide</a>
                    </p>
                </div>
            </section>
        );
    }
}

export default Call;