/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="section experience section" id="experience">
            <h2 className="section__title">Experience 💼</h2>
            <span className="section__subtitle">Where I've Worked</span>

            <div className="exp__container container grid">

                {/* Full Stack Developer / Freelance */}
                <div className="exp__content">
                    <div>
                        <i className="uil uil-brackets-curly exp__icon"></i>
                        <h3 className="exp__title">Full Stack <br /> Web Developer</h3>
                    </div>
                    <div>
                        <span className="exp__comp">Freelance / Newton School</span>
                    </div>

                    <span className="exp__button" onClick={() => toggleTab(1)}>
                        View More <i className="uil uil-arrow-right exp__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                        <div className="exp__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>
                            <h3 className="exp__modal-title">Full Stack Developer <br /> Jun 2022 – Present</h3>
                            <p className="exp__modal-description">
                                Completed MERN Stack Development course at Newton School and built multiple production-ready apps.
                            </p>

                            <ul className="exp__modal-experiences grid">
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Built & deployed full-stack applications using React, Node, Express, and MongoDB.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Designed REST APIs and implemented secure authentication systems.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Projects hosted on Vercel, Netlify, Render & MongoDB Atlas.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Softbeads Pvt. Ltd. */}
                <div className="exp__content">
                    <div>
                        <i className="uil uil-database exp__icon"></i>
                        <h3 className="exp__title">Technical <br /> Support Engineer</h3>
                    </div>
                    <div>
                        <span className="exp__comp">Softbeads Private Limited</span>
                    </div>

                    <span className="exp__button" onClick={() => toggleTab(2)}>
                        View More <i className="uil uil-arrow-right exp__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                        <div className="exp__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>
                            <h3 className="exp__modal-title">Technical Support Engineer <br /> Oct 2019 – Present</h3>
                            <p className="exp__modal-description">
                                Supporting client systems and ensuring high uptime and fast resolutions.
                            </p>

                            <ul className="exp__modal-experiences grid">
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Resolved 50+ technical issues daily, reducing turnaround time by 25%.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Customized SQL databases and created automated reports with Crystal Reports.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Mentored junior team members and improved process documentation.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mrianso */}
                <div className="exp__content">
                    <div>
                        <i className="uil uil-database exp__icon"></i>
                        <h3 className="exp__title">Technical <br /> Support Engineer</h3>
                    </div>
                    <div>
                        <span className="exp__comp">Mrianso</span>
                    </div>

                    <span className="exp__button" onClick={() => toggleTab(3)}>
                        View More <i className="uil uil-arrow-right exp__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "exp__modal active-modal" : "exp__modal"}>
                        <div className="exp__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>
                            <h3 className="exp__modal-title">Technical Support Engineer <br /> Apr 2018 – Oct 2019</h3>
                            <p className="exp__modal-description">
                                Started my IT career here, building a strong foundation in databases, client support, and troubleshooting.
                            </p>

                            <ul className="exp__modal-experiences grid">
                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Assisted in SQL customization and report generation for clients.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Collaborated with dev team to troubleshoot application issues.</p>
                                </li>

                                <li className="exp__modal-experience">
                                    <i className="uil uil-check-circle exp__modal-icon"></i>
                                    <p className="exp__modal-info">Learned client handling, requirement gathering, and structured issue resolution.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Experience;
