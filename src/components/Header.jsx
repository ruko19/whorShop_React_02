import React from "react";
import "../styles/Header.css"
import IMGLogo from "../assets/icons/logo.svg"
import background from "../assets/img/desktop/image-hero.jpg"
import { items } from '../utils/Data';
function Header() {
    return (

        <header className="header_container" style={{ backgroundImage: `url(${background})` }}>

            <nav className="navbar navbar-expand-lg navbar-light container  ">
                <div className="container-fluid">
                    <span className="navbar-brand" ><img src={IMGLogo} alt="" /></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" navbar collapse  navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            {
                                items.map(item => (
                                    <li key={item} className="nav-item">

                                        <span className="items_container nav-link active" >{item}</span>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </nav>

            <div className="header_text ">
                <p>IMMERSIVE <b /> EXPERIENCES THAT DELIVER</p>
            </div>
        </header>


    )
}

export default Header;