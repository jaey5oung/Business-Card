import React, { useRef } from "react";
import styles from "./Card_add_form.module.css";
import Button from "../button/Button";
// import ImageFileInput from '../image_file_input/Image_file_input'

function CardAddForm({ FileInput,onAdd }) {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    //클릭이되면 add가되는 함수
    const onSubmit = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now(), //uid
            name: nameRef.current.value || "",
            company: companyRef.current.value || "",
            theme: themeRef.current.value,
            title: titleRef.current.value || "",
            email: emailRef.current.value || "",
            message: messageRef.current.value || "",
            fileName: "",
            fileURL: "",
        };
        formRef.current.reset();
        onAdd(card);
    };

    return (
        <form ref={formRef} className={styles.form}>
            <input
                ref={nameRef}
                className={styles.input}
                type="text"
                name="name"
                placeholder="Name"
            />
            <input
                ref={companyRef}
                className={styles.input}
                type="text"
                name="company"
                placeholder="Company"
            />
            <select
                className={styles.select}
                ref={themeRef}
                name="theme"
                placeholder="Theme"
            >
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="colorful">colorful</option>
            </select>
            <input
                ref={titleRef}
                className={styles.input}
                type="text"
                name="title"
                placeholder="Title"
            />
            <input
                ref={emailRef}
                className={styles.input}
                type="text"
                name="email"
                placeholder="Email"
            />
            <textarea
                ref={messageRef}
                className={styles.textarea}
                name="message"
                placeholder="Message"
            />
            <div className={styles.fileInput}>
               <FileInput/>
            </div>
            <Button name="Add" onClick={onSubmit} />
        </form>
    );
}

export default CardAddForm;
