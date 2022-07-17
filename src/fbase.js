import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAr0aAFlqtv8EZErAwuVzFQcCotV6zp7c",
  authDomain: "pcommunity-8cdd7.firebaseapp.com",
  projectId: "pcommunity-8cdd7",
  storageBucket: "pcommunity-8cdd7.appspot.com",
  messagingSenderId: "252249011108",
  appId: "1:252249011108:web:4725bfea6eb38420c18731",
  measurementId: "G-NQ9LT70WES",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const authService = getAuth(app);
