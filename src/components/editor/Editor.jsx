import React from "react";
import styles from "./Editor.module.css";
import CardEditForm from "../card_edit_form/Card_edit_form";
import CardAddForm from "../card_add_form copy/Card_add_form";

function Editor({ FileInput,cards, addCard, updateCard, deleteCard }) {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            {Object.keys(cards).map((key) => {
             
                return (
                    <CardEditForm
                        key={key}
                        FileInput={FileInput}
                        card={cards[key]}
                        updateCard={updateCard}
                        deleteCard={deleteCard}
                    />
                );
            })}
            <CardAddForm FileInput={FileInput} onAdd={addCard} />
        </section>
    );
}

export default Editor;
