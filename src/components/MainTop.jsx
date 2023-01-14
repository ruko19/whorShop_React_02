import React from "react";
import "../styles/MainTop.css"
import ImgMainTop from "../assets/img/desktop/image-interactive.jpg"


function MainTop() {
    const newLocal = "mainTop-text";
    return (

        <div className="mainTop-container container">
            <img src={ImgMainTop} alt="" />
            <div className={newLocal}>
                <h2>THE LEADER IN INTERACTIVE VR</h2>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reallity projects for some of the best companies around the globe.Our award-winning creations have transformed business through digital experiences that bind to their brand.</p>


            </div>
        </div>

    )

}

export default MainTop;
