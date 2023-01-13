import React from "react";
import "../styles/Card.css"

function Card({ imagen, title }) {



    return (
        <div className="card_container">
            <img src={imagen} alt="" />
            <span>{title}</span>
        </div>
    )
}
export default Card;