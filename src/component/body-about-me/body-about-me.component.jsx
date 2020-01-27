import React, { Fragment } from 'react';
import './body-about-me.style.scss';
const BodyAboutMe = () => {
    return (
        <Fragment>
            <div className="about_me_wrapper" id="about_section">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 about_me_img_inner">
                                <div className="about_me_bg_layer">
                                    <img src="images/bg_layer_about_me.png" alt="Profile" />
                                </div>
                                <div className="row">
                                    <div className="pf_descp_wrapper">
                                        <div className="problem_solver">
                                            <i className="fas fa-exclamation-triangle"></i>
                                            <p className="pf_title">Problem Solver</p>
                                        </div>
                                        <div className="design_skill">
                                            <i className="fas fa-laptop-code"></i>
                                            <p className="pf_title"> Design skill</p>
                                        </div>
                                        <div className="team_work">
                                            <i className="fas fa-user-friends"></i>
                                            <p className="pf_title"> Team work</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 about_me_inner">
                                <div className="app_title mb-3">About Me <span className="title_line"></span></div>
                                <h3>Web Developer and</h3>
                                <h3>UI Designer</h3>
                                <p>
                                   Hello, I am Wishvanath, Web-developer based in India. I am rich experience in Application Development, Website Designing & Building. Also I am good at..
                                </p>
                                <span className="d-flex skills">
                                    <p>Reac.js</p>
                                    <p>Node.js</p>
                                    <p>MongoDB</p>
                                    <p>MySQL</p>
                                    <p>PostgreSQL</p>
                                    <p>Html</p>
                                    <p>CSS</p>
                                    <p>JavaScript</p>
                                    <p>JQuery</p>
                                    <p>Rest Api</p>
                                </span>
                                <button className="btn btn_download mr-3">View More</button>
                                <button className="btn btn_download" id="send_message">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default BodyAboutMe;