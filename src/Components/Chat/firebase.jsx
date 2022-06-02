import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD52UIZVMKMLRlhHOVgewa2y-MN66kGu00",
    authDomain: "schat01.firebaseapp.com",
    projectId: "schat01",
    storageBucket: "schat01.appspot.com",
    messagingSenderId: "1016046469216",
    appId: "1:1016046469216:web:5fd8322a9b7981c0084305",
    measurementId: "G-PJ4N06QCH3"
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore()
export default app;
export const storage = getStorage(app);
export const provider=new GoogleAuthProvider();