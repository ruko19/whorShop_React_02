import React from "react";
import "../styles/Header.css"
import IMGHERO from "../assets/img/desktop/image-hero.jpg"
import IMGLogo from "../assets/icons/logo.svg"
import background from "../assets/img/desktop/image-hero.jpg"

const items = ["about", "carrers", "events", "products", "support"];

function Header() {
    return (

        // <header className="header_container" style={{ backgroundImage: `url(${background})` }}>

        //     {/* <img className="img_hero" src={IMGHERO} alt="" /> */}

        //     <nav className="navbar container ">
        //         <div className="logo_container">
        //             <img src={IMGLogo} alt="" />
        //         </div>

        //         <div className="items_container">
        //             <ul className="items_list">
        //                 {
        //                     items.map(item => (
        //                         <li>{item}</li>
        //                     ))
        //                 }
        //             </ul>

        //         </div>
        //     </nav>

        //     <div className="header_text ">
        //         <p>IMMERSIVE <b /> EXPERIENCES THAT DELIVER</p>
        //     </div>
        // </header>

        <header className="header_container" style={{ backgroundImage: `url(${background})` }}>

            <nav className="navbar navbar-expand-lg navbar-light container  ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={IMGLogo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" navbar collapse  navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            {
                                items.map(item => (
                                    <li className="nav-item">

                                        <a className="items_container nav-link active" aria-current="page" href="#">{item}</a>
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