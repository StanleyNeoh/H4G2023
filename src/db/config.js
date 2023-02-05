// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1KRgAaczePfrPGiJWOlNsdc5ePNiNucI",
  authDomain: "h4g2023.firebaseapp.com",
  projectId: "h4g2023",
  storageBucket: "h4g2023.appspot.com",
  messagingSenderId: "482882506780",
  appId: "1:482882506780:web:21261faf7f389f400c0fd9",
  measurementId: "G-HLN8NM90ZM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);