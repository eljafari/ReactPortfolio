import React from "react";
import Resume from '../../assets/Resume.pdf'

function CTA() {
    return (
        < div className="cta">
            <a className=" btn" href={Resume} download>Download CV</a>
            <a className="btn-primary btn" href="#contact">Let's Talk</a>
        </div >
    )
}
export default CTA