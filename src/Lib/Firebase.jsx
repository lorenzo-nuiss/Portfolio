import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-G5cHdDr2TB2t3NTJO-VvnsGU4mWouQE",
  authDomain: "portfolio-edfbc.firebaseapp.com",
  projectId: "portfolio-edfbc",
  storageBucket: "gs://portfolio-edfbc.appspot.com",
  messagingSenderId: "517455015660",
  appId: "1:517455015660:web:eaba6680be8ff9f6507fc9",
  measurementId: "G-HYP5YWZ7VB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const storage = getStorage();

// Create a child reference
const imagesRef = ref(storage, "images");

export const spaceRef = ref(storage, "images/SwooshRickEtMorty.jpeg");
