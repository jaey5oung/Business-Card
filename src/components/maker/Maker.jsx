import React, { useEffect, useState } from "react";
import styles from "./Maker.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useHistory } from "react-router";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";

function Maker({ authService }) {
    const [cards, setCards] = useState([
        {
            id: "1",
            name: "Jaeyoung",
            company: "Spring Cloud",
            title: "Front Enginner",
            theme: "dark",
            email: "jaey5oung@naver.com",
            message: "go for it",
            fileName: "Jaeyoung",
            fileUrl: null,
        },
        {
            id: "2",
            name: "Yeonhee",
            company: "On Side",
            title: "Management Support",
            theme: "light",
            email: "qlcdmcjstk@naver.com",
            message: "go for it",
            fileName: "Yeonhee",
            fileUrl: null,
        },
        {
            id: "3",
            name: "YoungJu",
            company: "Cha Hospital",
            title: "Nurse",
            theme: "colorful",
            email: "dudwn326@naver.com",
            message: "go for it",
            fileName: "Jaeyoung",
            fileUrl: null,
        },
    ]);
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };
    //user가 로그아웃된다면 === 없다면
    useEffect(() => {
        authService.onAuthChange((user) => {
            if (!user) {
                history.push("/");
            }
        });
    });

    const addCard = (card) => {
        const updated = [...cards, card];
        setCards(updated);
    };
    const updateCard = (card) => {
      console.log(card);
    };
    const deleteCard = (card) => {
    console.log(card);
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} addCard={addCard} updateCard={updateCard} deleteCard={deleteCard} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
}

export default Maker;
