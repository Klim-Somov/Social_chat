import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsi6TtPrEKBADXEWYhaoOQZCVpx2N52uA",
  authDomain: "social-chat-475d9.firebaseapp.com",
  projectId: "social-chat-475d9",
  storageBucket: "social-chat-475d9.appspot.com",
  messagingSenderId: "182469174710",
  appId: "1:182469174710:web:c07ccfb938fc00b36c8d17",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
