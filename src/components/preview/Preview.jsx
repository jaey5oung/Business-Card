import React from "react";
import styles from "./Preview.module.css";
import Card from "../card/Card";

function Preview({ cards }) {
    return (
        <section className={styles.preview}>
            <h1 className={styles.title}>Card Preview</h1>
            {cards.map((card) => {
                return <Card card={card}></Card>;
            })}
        </section>
    );
}

export default Preview;
