import React from "react";
import Image from "./Image/image2.jpg";
import ResumeFile from './Image/Nikitaprasad.pdf'; 

const About = () => {
    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = ResumeFile;
        link.download = "My_Resume.pdf"; 
        link.click();
        alert('You are downloading my resume')
    };

    return (
        <>
            <div className="d-flex justify-content-center bg-black p-1" style={{ color: "yellow" }}>
                <h3>{"<"} About Me {"/>"}</h3>
            </div>
            <div className="row bg-dark">
                <div className="col-md-6 p-3 mr-5 d-flex justify-content-center">
                    <img src={Image} width={200} alt="Profile" />
                </div>
                <div className="col-md-6 p-3">
                    <h3 style={{ color: "yellowgreen" }}>I'm Nikita</h3>
                    <h3 style={{ color: "yellowgreen" }}>frontend developer</h3>
                    <p style={{ color: "magenta" }}>I am a frontend developer based in Nagpur, India. I am a computer science graduate from MGKVP. I am very passionate about improving my coding skills & developing websites. I am learning to develop websites using JavaScript. I'm working on myself to improve my skills. I would love to be a full-stack developer.</p>
                    <h4 style={{ color: "green" }}>{"<"} Email: pr.nikita997@gmail.com {"/>"}</h4>
                    <h4 style={{ color: "green" }}>{"<"} Place: Nagpur, India {"/>"}</h4>
                    <button type="button" className="btn btn-success m-4" style={{ width: "160px" }} onClick={handleResumeDownload}>
                        <strong>{"["} myResume {"]"}</strong>
                    </button>
                    
                </div>
            </div>
        </>
    );
};

export default About;
