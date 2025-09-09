import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtAs23aVeNU6gArKDsKlKecnKnLvTN0p4",
  authDomain: "kodigo-app-25cd1.firebaseapp.com",
  projectId: "kodigo-app-25cd1",
  storageBucket: "kodigo-app-25cd1.firebasestorage.app",
  messagingSenderId: "769072177410",
  appId: "1:769072177410:web:cf7b9f2d39a97dcc49221b"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);