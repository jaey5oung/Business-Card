import firebase from "firebase";
import firebaseApp from "./firebase";

//로그인하거나 로그아웃의 관련된일을 하는 클래스
class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }

    logout() {
        firebase.auth().signOut();
    }

    //로그인상태가 바뀔때마다 콜백함수가 호출이 된다 (함수로 전달받은 onUserChanged에 다시 전달한다)
    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged((user) => {
            onUserChanged(user);
        });
    }
}

export default AuthService;
