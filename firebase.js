import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOcpi3pNoxRmaA6GPgfkm_IYp4KlkYvFQ",
  authDomain: "twitter-clone-2ce47.firebaseapp.com",
  projectId: "twitter-clone-2ce47",
  storageBucket: "twitter-clone-2ce47.appspot.com",
  messagingSenderId: "1040179091300",
  appId: "1:1040179091300:web:a9c9fb432a40c1bcb9cc71"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
