import React from 'react';
import { Link } from 'react-router-dom';
import "./about.css"
import WebAssetIcon from '@material-ui/icons/WebAsset';
import StorageIcon from '@material-ui/icons/Storage';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';


const About = () => {
    
    return ( 
        <div className="aboutBackground">
            
            <div className="buttonContainer">
            <div className="titleA">About</div>
                <Link to="/PersonalProfile">
                    <button className="exit">X</button>
                </Link>
            </div> 
                <div className="aboutInfo">
                    <div className="skills">
                        <div className="skillsTopBar">
                                <div style={{height:"190%", color:"gold", width:"5%", backgroundColor: "gold", borderRadius:"200%",marginTop:"-5px", marginLeft:"-8px"}}>v</div>
                                <div style={{height:"190%", color:"gold", width:"5%", backgroundColor: "gold", borderRadius:"200%",marginTop:"-5px", marginRight:"-8px"}}>v</div> 
                        </div>
                        <WebAssetIcon className="bannerIcon" style={{ fontSize: 70, color:"white" }}/>
                        <div className="skillTitle">Front End</div>
                            <ul className="list">
                                <li className="liItem">HTML</li>
                                <li className="liItem">CSS</li>
                                <li className="liItem">JavaScript</li>
                                <li className="liItem">React</li>
                            </ul>
                        </div>

                    <div className="skills">
                        <div className="skillsTopBar">
                            <div style={{height:"190%", color:"gold", width:"5%", backgroundColor: "gold", borderRadius:"200%",marginTop:"-5px", marginLeft:"-8px"}}>v</div>
                            <div style={{height:"190%", color:"gold", width:"5%", backgroundColor: "gold", borderRadius:"200%",marginTop:"-5px", marginRight:"-8px"}}>v</div> 
                        </div>
                        <StorageIcon className="bannerIcon" style={{ fontSize: 70, color:"white" }}/>
                        <div className="skillTitle">Back End/Server</div>
                            <ul className="list" style={{marginBottom: 30}}>
                                <li className="liItem">C++</li>
                                <li className="liItem">C</li>
                                <li className="liItem">Node.js</li>
                            </ul>
                    </div>

                    <div className="skills">
                        <div className="skillsTopBar">
                            <div style={{height:"190%", color:"gold", width:"5%", backgroundColor: "gold", borderRadius:"200%",marginTop:"-5px", marginLeft:"-8px"}}>v</div>
                            <div style={{height:"190%", color:"gold", width:"5%", backgroundColor: "gold", borderRadius:"200%",marginTop:"-5px", marginRight:"-8px"}}>v</div> 
                        </div>
                        <PeopleOutlineIcon className="bannerIcon" style={{ fontSize: 70, color:"white" }}/>
                        <div className="skillTitle">Soft Skills</div>
                            <ul className="list" style={{marginBottom: 0}}>
                                <li className="liItem">Teamwork</li>
                                <li className="liItem">Problem-Solving</li>
                                <li className="liItem">Dependability</li>
                                <li className="liItem">Adaptability</li>
                            </ul>
                    </div>

                    <div className="summary">
                        <div style={{fontSize:"30px", textDecoration: "underline"}}>A Little About Me</div>
                        
                        
                        <p style={{margin:"0", height:"80%",lineHeight:"32px", padding:"5px", textIndent:"30px", marginTop:"10px"}}>
                                I am a Computer Science student, currently 
                            attending Simon Fraser Univeristy in British Columbia. 
                            I pride myself on my work ethic. I am a reliable,
                            motivated and respectful individual. I love to
                            learn and improve myself every single day. I am
                            a team player, and great communicator. If there is a
                            task that needs to get done, I will always figure out a
                            way to accomplish it.
                        </p>

                    </div>
                </div> 
            </div>
     );
}
 
export default About;
