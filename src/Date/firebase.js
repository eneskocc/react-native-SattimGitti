// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkPPizWgxgTOJ0ECalDWsacWNDtnpVI_g",
  authDomain: "sattimgitti-d0abd.firebaseapp.com",
  projectId: "sattimgitti-d0abd",
  storageBucket: "sattimgitti-d0abd.appspot.com",
  messagingSenderId: "655767046379",
  appId: "1:655767046379:web:d77e2d012f36f6f0fa96ae",
  measurementId: "G-2RGGSBKJHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);