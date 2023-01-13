import React from "react";
import "../styles/Footer.css"
import IMGLogo from "../assets/icons/logo.svg"
import { items } from "./Header";
import icon1 from "../assets/icons/icon-facebook.svg"
import icon2 from "../assets/icons/icon-instagram.svg"
import icon3 from "../assets/icons/icon-pinterest.svg"
import icon4 from "../assets/icons/icon-twitter.svg"

function Footer() {
    return (
        <footer >
            <div className="footer_container container">

                <div className="footer_left">
                    <img src={IMGLogo} alt="" />
                    <ul className="navbar-nav">

                        {
                            items.map(item => (
                                <li key={item} className="nav-item">

                                    <a className="items_container nav-link active" aria-current="page" href="#">{item}</a>
                                </li>
                            ))
                        }

                    </ul>

                </div>
                <div className="footer_right">
                    <div className="icons_container">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                        <img src={icon4} alt="" />
                    </div>
                    <span>© 2021 Loopstudio. All rights reserved.</span>

                </div>
            </div>

        </footer>
    )
}

export default Footer