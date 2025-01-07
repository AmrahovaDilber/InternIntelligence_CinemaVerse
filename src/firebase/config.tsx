import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3pdGzwqzDOPh1x67OlMRdeAU_XUTxm3s",
  authDomain: "cinemaverse-95edd.firebaseapp.com",
  projectId: "cinemaverse-95edd",
  storageBucket: "cinemaverse-95edd.firebasestorage.app",
  messagingSenderId: "421816504860",
  appId: "1:421816504860:web:d9dabf0ddee81a2b8885d9",
  measurementId: "G-3DBQXZ4T6C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app)
export { app, auth,db };
