import React from "react";
import "../styles/MainNav.css"


function MainNav() {
    const newLocal = "mainNav-container container";
    return (
        <div className={newLocal}>
            <h3>OUR CREATIONS</h3>
            <button>SEE ALL</button>
        </div>
    )
}

export default MainNav;