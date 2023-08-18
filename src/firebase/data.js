import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDtL9UsJBzi2RbO1W0CIH_YGdayT70oXeI",
    authDomain: "theclothescove.firebaseapp.com",
    projectId: "theclothescove",
    storageBucket: "theclothescove.appspot.com",
    messagingSenderId: "1037788495139",
    appId: "1:1037788495139:web:b2e653df5ba8922bfe2096"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
