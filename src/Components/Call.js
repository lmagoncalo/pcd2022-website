import React, { Component } from 'react';


class Call extends Component {
    constructor(props) {
        super(props);

        this.path = '/';

        this.state = {
            url: process.env.PUBLIC_URL + "/media/pcd_exhibition_brief_regulation.pdf",
        }
    }

    render() {
        return (

            <section className="call-inner">
                <p className="title_div">Call for Works</p>
                <div className="call-into">
                    <p><span className="text_bold">The Processing Community Day @ Coimbra 2022</span> invites professionals, researchers, students, designers and artists to submit individual or collective projects that visually and/or conceptually explore techniques or subjects related to the theme <span className="text_bold">“Community”</span>.</p>
                    <p>In this <span className="text_bold">PCD@Coimbra</span> edition, we welcome the submission of artworks to <span className="text_bold">three distinct tracks</span>:
                        <br/>— Community modules
                        <br/>— Poster
                        <br/>— Open Submission<br/>
                    </p>
                    <p>The selected artworks will be exhibited and/or presented during the PCD@Coimbra in one or more exhibition venues in Coimbra, Portugal.</p>

                </div>


                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">Submission Tracks</h4>
                    <h6 className="sub_sub_title_div">Community modules</h6>
                    <p>Any type of artwork that <span className="text_bold">fits in the template</span> provided (<a href="https://openprocessing.org/sketch/1594388">here</a>) and meets the following requirements:
                        <br/>— Change only the function <span className="text_enf">draw_here</span> from the file <span className="text_enf">code_here</span>;
                        <br/>— Draw in the canvas <span className="text_enf">“c”</span> as in the presented example;
                        <br/>— Do not change the <span className="text_enf">size</span> or <span className="text_enf">pixel density</span> of the canvas;
                        <br/>— Use only the colors provided in the sketch or combination of them;
                        <br/>— Set the variable <span className="text_enf">blend_mode</span> as only one of the two provided (<span className="text_enf">LIGHTEST</span> or <span className="text_enf">DARKEST</span>).</p>

                    <h6 className="sub_sub_title_div">Posters</h6>
                    <p>Posters that fit two main requirements: <span className="text_bold">designed using code</span> and <span className="text_bold">within the theme “Community”</span>. Code (any programming language) must be used in at least one stage of the design process. Code can be used either to produce materials (for example images) or in the final generation (generating the whole artefact). Provided that you fulfil these requirements, you are allowed to use any media, material or technique.</p>

                    <h6 className="sub_sub_title_div">Open Submission</h6>
                    <p>Any type of artwork that fits two main requirements: <span className="text_bold">use code</span> and <span className="text_bold">within the theme “Community”</span>. For example: system/applications, performances that involve the interaction with a system or its outputs, etc.</p>

                </div>

                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">How to participate</h4>
                    <p>The brief document containing detailed information about the call can be downloaded <a href={this.state.url} target="_blank" rel="noopener noreferrer" >here</a>.</p>
                    <p>— Participation is <span className="text_bold">free of charge</span>.
                        <br/>— We accept both <span className="text_bold">individual</span> and <span className="text_bold">collective submissions</span>. In the case of collective submissions, the authors must indicate one corresponding author who may be contacted by the organisers.
                        <br/>— The participants are allowed to submit <span className="text_bold">multiple entries</span>.
                        <br/>— Submissions can only be made via the <span className="text_bold">online submission link</span> (see Submission section below).
                        <br/>— Failure to comply these conditions will invalidate the participation.
                    </p>
                </div>


                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">Submission</h4>
                    <p>In addition to completing all the fields of the online form, you are required to submit the following materials:</p>
                    <p><span className="text_enf_color">(i) </span> <span className="text_bold">Brief description</span> of your project (max. 500 characters) describing the concept and clearly
                        stating how computer code was used, either in the process or for the final generation. We accept descriptions in Portuguese and English (preferred language);</p>
                    <p><span className="text_enf_color">(ii) </span><span className="text_bold">Artwork files</span>. The type of submission depends on the track. We are accepting three distinct types of submission:</p>

                    <h6 className="sub_sub_title_div">Community modules</h6>
                    <p>The output should be a <span className="text_bold">link</span> to a public sketch in the <span className="text_bold">OpenProcessing</span> (<a href="https://openprocessing.org">https://openprocessing.org</a>), <span className="text_bold">P5js Editor</span> (<a href="https://p5js.org/">https://p5js.org/</a>) or other code-sharing platforms. It must be a modified copy of the provided template and it must follow the presented requirements.</p>

                    <h6 className="sub_sub_title_div">Posters</h6>
                    <p>The output should be submitted in <span className="text_bold">B2 poster format</span> (500mm x 700mm) in a <span className="text_bold">portrait orientation</span> (PDF file, 300 DPI, Color profile: CMYK).</p>

                    <h6 className="sub_sub_title_div">Open Submission</h6>
                    <p>Materials that show the artwork, such as a <span className="text_bold">video demonstration</span> or <span className="text_bold">access to the application</span>. The authors should provide the requirements of the installation. Materials (e.g. video) can be submitted using a file hosting service (e.g. Dropbox or Google Drive).</p>
                </div>

                <div className="sub_topic s-t">
                    <h4 className="sub_title_div">Deadline</h4>
                    <p><span className="text_bold">25th September 2022</span> (23:59 UTC)</p>
                </div>

                    <div className="sub_topic s-t">
                        <h4 className="sub_title_div">Submission Form</h4>
                    <p>Submissions must be uploaded using the online <a href="https://forms.gle/NSjbKzi1RV7w8mE56">form</a>.</p>
                        <p>Before submitting, participants should read the brief document, which contains detailed information about the call and can be downloaded <a href={this.state.url} target="_blank" rel="noopener noreferrer" >here</a>.
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
                    <p>If you have any questions please contact us using the email <a
                        href="mailto:pcdcoimbra@dei.uc.pt">pcdcoimbra(at)dei.uc.pt</a></p>
                </div>
                <p>
                    © 2022
                </p>
            </section>
        );
    }
}

export default Call;