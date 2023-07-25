import React from "react";
import mgkvpLogo from "./Image/mgkvpLogo.png"
const Education = () => {


    return (

        <>
        <div>
            <div className="d-flex justify-content-center bg-black p-1" style={{ color: "yellow" }}>
                <h3>{'<'} My Education {'/>'}</h3>
            </div>
            <div className="bg-dark row">
                <div className="p-3 mr-5 col-md-6  d-flex justify-content-center">
                    <img src={mgkvpLogo} width={200} />
                </div>
                <div className="p-3 mr-5 col-md-6 d-flex align-items-center">
                    <div>
                        <h4 style={{ color: "yellowgreen" }}> {'<college>'} MAA KHANDWARI PG COLLEGE {'<college/>'}</h4>
                        <h5 style={{ color: "green" }}> {'<'} Affiliated to Mahatma Gandhi Kashi Vidyapeeth {'/>'}</h5>
                    </div>
                </div>
            </div>
            </div>



        </>
    )
}
export default Education 