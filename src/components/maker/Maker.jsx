import React, { useEffect, useState } from "react";
import styles from "./Maker.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useHistory } from "react-router";
import Editor from "../editor/Editor";
import Preview from "../preview/Preview";

function Maker({ FileInput,authService }) {
    const [cards, setCards] = useState({
        1: {
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
        2: {
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
    });

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

    //기존의 카드를 복사하고 추가하는거 하나만 card로 더해준다
    //setCard로 업데이트된거 저장
    const createOrupdateCard = (card) => {
        setCards((cards) => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
    };
    const deleteCard = (card) => {
        setCards((cards) => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor
                FileInput={FileInput}
                    cards={cards}
                    addCard={createOrupdateCard}
                    updateCard={createOrupdateCard}
                    deleteCard={deleteCard}
                />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
}

export default Maker;
