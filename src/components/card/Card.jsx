import React from "react";
import styles from "./Card.module.css";

function Card({ card }) {
    return <h1>{card.id}</h1>;
}

export default Card;
