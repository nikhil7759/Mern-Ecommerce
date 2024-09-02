// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRVsevKz6tfImrIkVcnaHCBKV2abGBHxk",
  authDomain: "login-95c52.firebaseapp.com",
  databaseURL: "https://login-95c52-default-rtdb.firebaseio.com",
  projectId: "login-95c52",
  storageBucket: "login-95c52.appspot.com",
  messagingSenderId: "792222705442",
  appId: "1:792222705442:web:8df8087f5de1abfb83a77b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
