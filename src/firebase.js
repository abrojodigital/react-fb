import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYs1q6NQKqfc2Ct1bRtdmsb8OuyN_BdTw",
  authDomain: "react-2022-c88d2.firebaseapp.com",
  projectId: "react-2022-c88d2",
  storageBucket: "react-2022-c88d2.appspot.com",
  messagingSenderId: "174409884518",
  appId: "1:174409884518:web:14e0a755e25c1b3ca51ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };