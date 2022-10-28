// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXkHfaiZNFCczgk3RK6y0cXph6JCCnreg",
  authDomain: "formlist-7d61f.firebaseapp.com",
  projectId: "formlist-7d61f",
  storageBucket: "formlist-7d61f.appspot.com",
  messagingSenderId: "413226544606",
  appId: "1:413226544606:web:08411e898468e04dd1814f",
  measurementId: "G-24DC4S518E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;