import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {

  const firebaseConfig = {
    apiKey: "AIzaSyBKdZxv5gUKVGaG5_DiAWMEuLB--B85am4",
    authDomain: "habit-tracker-9adf6.firebaseapp.com",
    projectId: "habit-tracker-9adf6",
    storageBucket: "habit-tracker-9adf6.appspot.com",
    messagingSenderId: "884657257353",
    appId: "1:884657257353:web:137dd14a3f2e08d95cbf58",
  };

  const app = initializeApp(firebaseConfig);
  const db  = getFirestore(app);

  return {
    provide: {
      firebaseApp: app,
      db
    }
  }

})