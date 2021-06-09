import React from "react";
import styles from "./Editor.module.css";
import CardEditForm from "../card_edit_form/Card_edit_form";
import CardAddForm from "../card_add_form copy/Card_add_form";

function Editor({ cards, addCard, updateCard, deleteCard }) {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            {cards.map((card) => {
                console.log(card);
                return (
                    <CardEditForm
                        key={card.id}
                        card={card}
                        updateCard={updateCard}
                        deleteCard={deleteCard}
                    />
                );
            })}
            <CardAddForm onAdd={addCard} />
        </section>
    );
}

export default Editor;
