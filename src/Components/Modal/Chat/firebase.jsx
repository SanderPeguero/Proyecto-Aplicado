import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0bf6ukoCvURxnSCffcmBAYtPV_tcyao4",
  authDomain: "quantumswap22.firebaseapp.com",
  databaseURL: "https://quantumswap22-default-rtdb.firebaseio.com",
  projectId: "quantumswap22",
  storageBucket: "quantumswap22.appspot.com",
  messagingSenderId: "698793619036",
  appId: "1:698793619036:web:2003dd0942b83f7d050099",
  measurementId: "G-6NPP753XL2"
}

const app = initializeApp(firebaseConfig);
export const db=getFirestore()
export default app;
export const storage = getStorage(app);
export const provider=new GoogleAuthProvider();