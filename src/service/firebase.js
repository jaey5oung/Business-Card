import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_DB_URL,
    databaseURL: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
// Initialize Firebase 초기화
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;

// firebase사이트에서 스크립트 추가 yarn add firebase 