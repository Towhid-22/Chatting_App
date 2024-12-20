// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPvH5Bu5mYVRWMGouVgq39k4zB8baz2Gs",
  authDomain: "chatting-app-f14ae.firebaseapp.com",
  projectId: "chatting-app-f14ae",
  storageBucket: "chatting-app-f14ae.firebasestorage.app",
  messagingSenderId: "630490672189",
  appId: "1:630490672189:web:6d7f446530e69b9d13ce54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig;