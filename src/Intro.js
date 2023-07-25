import React, { useState } from "react";
import Image from "./Image/image1.jpg"
const Intro = () => {


    return (
        <>

            <div className="row bg-dark ">
                <div className="col-md-6 d-flex align-items-center justify-content-center">

                    <div>
                        <div className="p-3 mr-5" style={{ color: "magenta" }}> <h3>{'{'} Hey there, I am "nikita prasad" {'}'}</h3></div>
                        <div className="p-3 mr-5" style={{ color: "green" }}> <h4>{'<'} I am into frontend development {'/>'}</h4></div>
                    </div>
                </div>
                <div className="p-3 mr-5 col-md-6  d-flex justify-content-center">
                    <img className="rounded" src={Image} width={100} />
                </div>
            </div>
           
        </>
    )

}
export default Intro