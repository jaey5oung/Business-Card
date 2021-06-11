import React from "react";
import Login from "./components/login/Login";
import styles from "./App.module.css";
import Maker from "./components/maker/Maker";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App({ FileInput,authService,cardRepository }) {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Login authService={authService} />;
                    </Route>
                    <Route path="/maker">
                        <Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
