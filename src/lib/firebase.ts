import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABj61Fze4OZTx37CHen6afUSzKFnhgMK0",
  authDomain: "noxerafx.firebaseapp.com",
  projectId: "noxerafx",
  storageBucket: "noxerafx.appspot.com",
  messagingSenderId: "978596669734",
  appId: "1:978596669734:web:214f8169f22fddb51f79e7",
  measurementId: "G-1MC9483PZT",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
