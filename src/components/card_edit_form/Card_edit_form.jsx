import React, { useRef } from "react";
import styles from "./Card_edit_form.module.css";
import Button from "../button/Button";
function CardEditForm({ FileInput, card, updateCard, deleteCard }) {
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    console.log("-------카드정보------", card);
    const { name, company, title, email, message, theme, fileName } =
        card;
    const onFileChange = (file) => {
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url,
        });
    };
    const onChange = (event) => {
        if (event.target == null) {
            return;
        }
        //current tartget이없으면 null이고 브라우저에서 기본적인이벤트를 처리하지않으면 preventDefault
        event.preventDefault();
        updateCard({
            //chage가 발생하며 받아오는 updateCard를 이용한다
            ...card,
            [event.target.name]: event.target.value,
        }); //name = key
    };
    const onSubmit = () => {
        deleteCard(card);
    };
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
                <FileInput name={fileName} onFileChange={onFileChange} />
            </div>
            <Button name="Delete" onClick={onSubmit} />
        </form>
    );
}

export default CardEditForm;
