import React from 'react';
import aboutOurTeam1 from "./../../image/Home-our-team1.png";
import aboutOurTeam2 from "./../../image/Home-our-team2.png";
import aboutOurTeam3 from "./../../image/Home-our-team3.png";
import aboutOurTeam4 from "./../../image/Home-our-team4.png";
import aboutOurTeam5 from "./../../image/Home-our-team5.png";
import aboutOurTeam6 from "./../../image/Home-our-team6.png";

const _AboutTeam = () => {
    return (
        <div id="our-team">
            <div className="container">
                <div className="our-team">
                    <h1 className="our-team_title">Our Team</h1>
                    <div className="our-team_blocks">
                        <div className="our-team_blocks-block">
                            <div className="our-team_blocks-block_bg">
                                <img src={aboutOurTeam1} alt=""/>
                            </div>
                            <p>Miss.Anushin oont </p>
                            <span>CEO & co-Founder</span>
                        </div>
                        <div className="our-team_blocks-block">
                            <div className="our-team_blocks-block_bg">
                                <img src={aboutOurTeam2} alt=""/>
                            </div>
                            <p>mr.Vishmas s.   </p>
                            <span>CTO & co-Founder</span>
                        </div>
                        <div className="our-team_blocks-block">
                            <div className="our-team_blocks-block_bg">
                                <img src={aboutOurTeam3} alt=""/>
                            </div>
                            <p>Miss.Tanisha kaduu  </p>
                            <span>VP Of Technology</span>
                        </div>
                        <div className="our-team_blocks-block">
                            <div className="our-team_blocks-block_bg">
                                <img src={aboutOurTeam4} alt=""/>
                            </div>
                            <p>Mr.KL Rahul  </p>
                            <span>Head of design</span>
                        </div>
                        <div className="our-team_blocks-block">
                            <div className="our-team_blocks-block_bg">
                                <img src={aboutOurTeam5} alt=""/>
                            </div>
                            <p>Miss.vashika g.  </p>
                            <span>vP Of Finance</span>
                        </div>
                        <div className="our-team_blocks-block">
                            <div className="our-team_blocks-block_bg">
                                <img src={aboutOurTeam6} alt=""/>
                            </div>
                            <p>Mr.Aryan Singh  </p>
                            <span>Head of Marketing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default _AboutTeam;