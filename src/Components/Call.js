import React, { Component } from 'react';


class Call extends Component {
    constructor(props) {
        super(props);

        this.path = '/';

        this.state = {
            url: "/media/pcd_exhibition_brief_regulation.pdf",
        }
    }

    render() {
        return (

            <section className="call-inner" style={{color: "var(--main-color)"}}>
                <p className="title_div">Call for Works</p>
                <div className="call-into">
                    <p>
                        The Processing Community Day @ Coimbra 2022 invites professionals, researchers, students, designers and artists to submit individual or collective projects that visually and/or conceptually explore techniques or subjects related to the theme <b>“Community”</b>.<br/>
                        In this PCD@Coimbra edition, we welcome the submission of artworks to three distinct tracks:
                        <ul>
                            <li>Community modules.</li>
                            <li>Poster.</li>
                            <li>Open Submission.</li>
                        </ul>
                        The selected artworks will be exhibited and/or presented during the PCD@Coimbra in one or more exhibition venues in Coimbra, Portugal.
                    </p>
                </div>


                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">Requirements</h4>
                    <ul>
                        <li><b>Community modules.</b> Any type of artwork that fits in the template provided (<a href="https://openprocessing.org/sketch/1594388">here</a>) and meets the following requirements:
                            <ul>
                                <li>Change only the function <i>draw_here</i> from the file <i>code_here</i>.</li>
                                <li>Draw in the canvas “c” as in the presented example.</li>
                                <li>Do not change the size or pixel density of the canvas.</li>
                                <li>Use only the colors provided in the sketch or combination of them.</li>
                                <li>Set the variable blend_mode as only one of the two provided (LIGHTEST or DARKEST).</li>
                            </ul>
                        </li>
                        <li><b>Poster.</b> Posters that fit two main requirements: designed using code and within the theme “community”. Code (any programming language) must be used in at least one stage of the design process. Code can be used either to produce materials (for example images) or in the final generation (generating the whole artefact). Provided that you fulfil these requirements, you are allowed to use any media, material or technique.</li>
                        <li><b>Open Submission.</b> Any type of artwork that fits two main requirements: use code and within the theme “community”. For example: system/applications, performances that involve the interaction with a system or its outputs, etc.</li>
                    </ul>
                </div>

                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">How to participate</h4>
                    <ul>
                        <li>We accept both individual and collective submissions. In the case of collective submissions, the authors must indicate one corresponding author who may be contacted by the organisers.</li>
                        <li>The participants are allowed to submit multiple entries.</li>
                        <li>Submissions can only be made via the online submission link (see Submission section below).</li>
                        <li>Failure to comply these conditions will invalidate the participation.</li>
                    </ul>
                </div>


                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">Submission</h4>
                    <p>In addition to completing all the fields of the online form, you are required to submit the following materials:</p>
                    <ul>
                        <li><b>Brief description of your project</b> (max. 500 characters) describing the concept and clearly
                            stating how computer code was used, either in the process or for the final generation. We
                            accept descriptions in Portuguese and English (preferred language);
                        </li>
                        <li>
                            <b>Artwork files.</b> The type of submission depends on the track. We are accepting three distinct types of submission:<br/>
                        </li>
                        <ul style={{listStyleType: "none"}}>
                            <li>
                                <b>1. Community modules</b><br/> The output should be a link to a public sketch in the OpenProcessing (<a href="https://openprocessing.org">https://openprocessing.org</a>), P5js Editor (<a href="https://p5js.org/">https://p5js.org/</a>) or other code-sharing platforms. It must be a modified copy of the provided template and it must follow the presented requirements.
                            </li>
                            <li>
                                <b>2. Poster</b><br/> The output should be submitted in B2 poster format (500mm x 700mm) in a portrait orientation (PDF file, 300 DPI, Color profile: CMYK).
                            </li>
                            <li>
                                <b>3. Open Submission</b><br/> Materials that show the artwork, such as a video demonstration or access to the application. The authors should provide the requirements of the installation. Materials (e.g. video) can be submitted using a file hosting service (e.g. Dropbox or Google Drive).
                            </li>
                        </ul>

                    </ul>
                </div>
                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">Submission</h4>
                    <p>Submissions must be uploaded using the online <a href="https://forms.gle/NSjbKzi1RV7w8mE56">form</a>.</p>
                    <p><b>Deadline</b><br/><span className="line-through">25th September 2022 (23:59 UTC)</span></p>
                    <p><b>Submission form link</b><br/><a href="https://forms.gle/NSjbKzi1RV7w8mE56" target="_blank" rel="noopener noreferrer">https://forms.gle/eBWQCi9JWskwpYzs8</a></p>
                </div>
                <div className={"sub_topic s-t"}>
                    <p>
                        Before submitting, participants should read the <a href={this.state.url} target="_blank" rel="noopener noreferrer" >brief document,</a> which contains detailed information about the call and can be downloaded <a href={this.state.url} target="_blank" rel="noopener noreferrer" >here</a>.
                    </p>
                </div>
                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">Jury</h4>
                    <p>
                        To be defined
                    </p>
                </div>
                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">More info</h4>
                    <p>
                        If you have any questions please contact us using the email pcdcoimbra(at)dei.uc.pt
                    </p>
                </div>
                <p>
                    © 2022
                </p>
            </section>
        );
    }
}

export default Call;