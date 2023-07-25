import React from "react";
import htmlLogo from "./Image/htmlImg.png"
import cssLogo from "./Image/cssImg.png"
import jsLogo from "./Image/jsimg.png"
import reactLogo from "./logo.svg"
import bsLogo from "./Image/Bootst.svg"

const Skills = () => {

    return (

        <>
        
            <div className="d-flex justify-content-center bg-black p-1" style={{ color: "yellow" }}>
                <h3>{'<'} Skills & Abilities {'/>'}</h3>
            </div>
            <div className="d-flex justify-content-center p-3 mr-5 bg-dark">
                <div>
                    <div className="d-flex align-item-center p-2 mr-3">
                        <img src={htmlLogo} width={90} />
                        <img src={cssLogo} width={90} />
                        <img src={jsLogo} width={90} />
                    </div>
                    <div className="d-flex justify-content-center p-2 mr-3">
                        <img src={reactLogo} width={120} />
                        <img src={bsLogo} width={80} />
                    </div>
                </div>
            </div>

        </>
    )
}
export default Skills 