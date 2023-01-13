import React from "react";
import "../styles/MainBot.css"
import {imgCards} from '../utils/Data';
import Card from "./Card";

function MainBot() {
    return (
        <section className="cards_container container">
            {
                imgCards.map(card => (
                    <Card
                        key={card.title}
                        imagen={card.imagenes}
                        title={card.title}
                    />
                ))
            }
        </section>
    )
}

export default MainBot;