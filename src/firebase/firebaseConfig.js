import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtXANjaKUo1PgwGLzbKJAtd0cz-7OWAOU",
  authDomain: "examen-prog-componentes-ce002.firebaseapp.com",
  projectId: "examen-prog-componentes-ce002",
  storageBucket: "examen-prog-componentes-ce002.firebasestorage.app",
  messagingSenderId: "668672156070",
  appId: "1:668672156070:web:4eeca578aa3c36df95ef67"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);

export { db, auth, storage };
