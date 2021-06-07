import React,{useEffect} from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Login.module.css";
import { useHistory } from "react-router-dom";

function Login({ authService }) {
    const history = useHistory();
    
    const goToMaker = (userId) => {
        history.push({
            pathname: "/maker",
            state: { id: userId },
        });
    };
    //goToMaker 에 사용자의 정보도 함께 보내야한다 {} obj를 이용해서 pathname과 id라는 키에 사용자의 정보를 전달한다
    const onLogin = (event) => {
        authService 
            .login(event.currentTarget.textContent)
            .then((data) => goToMaker(data.user.uid));
    };
    // auth_service -> onAuthChange 함수와 콜백
    useEffect(() => {
        authService.onAuthChange((user) => {
            user && goToMaker(user.id);
        });
    });

    return (
        <section className={styles.login}>
            <Header />
            <section>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            Google
                        </button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            Github
                        </button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    );
}


export default Login;
