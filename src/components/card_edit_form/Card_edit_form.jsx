import React, { useRef } from "react";
import styles from "./Card_edit_form.module.css";
import Button from "../button/Button";
import ImageFileInput from "../image_file_input/Image_file_input";

function CardEditForm({ card,updateCard,deleteCard }) {
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    console.log("-------카드정보------", card);
    const { name, company, title, email, message, theme, fileName, fileURL } =
        card;
    const onChange = (event) => {
        if (event.current.Target == null) {
            return 
        }
       
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]:event.currentTarget.value
        });
    };
    const onSubmit = () => {};
    return (
        <form className={styles.form}>
            <input
                className={styles.input}
                type="text"
                name="name"
                value={name}
                ref={nameRef}
                onChange={onChange}
            />
            <input
                className={styles.input}
                type="text"
                name="company"
                value={company}
                ref={companyRef}
                onChange={onChange}
            />
            <select
                className={styles.select}
                Ref={themeRef}
                name="theme"
                value={theme}
            >
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input
                className={styles.input}
                type="text"
                name="title"
                value={title}
                ref={titleRef}
                onChange={onChange}
            />
            <input
                className={styles.input}
                type="text"
                name="email"
                value={email}
                ref={emailRef}
                onChange={onChange}
            />
            <textarea
                className={styles.textarea}
                name="message"
                value={message}
                ref={messageRef}
                onChange={onChange}
            />
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name="Delete" onClick={onSubmit} />
        </form>
    );
}

export default CardEditForm;
