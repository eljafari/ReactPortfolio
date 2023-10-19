import React from "react";
import ElhamJafariFullStack from '../../assets/ElhamJafariFullStack.pdf'

function CTA() {
    return (
        < div className="cta">
            <a className=" btn" href={ElhamJafariFullStack} download>Download CV</a>
            <a className="btn-primary btn" href="#contact">Let's Talk</a>
        </div >
    )
}
export default CTA