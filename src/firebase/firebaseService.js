import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "firebase/firestore";

// ✅ Replace these with your actual Firebase project config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "item-management-c5ce5.firebaseapp.com",
  projectId: "item-management-c5ce5",
  storageBucket: "item-management-c5ce5.firebasestorage.app",
  messagingSenderId: "228037866923",
  appId: "1:228037866923:web:a6fb5cc2a929ac6abc0eee",
  measurementId: "G-SWM048PKHQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔹 Add item to Firestore
export const addItemToFirestore = async (item) => {
  await addDoc(collection(db, "items"), item);
};

// 🔹 Get all items from Firestore
export const getAllItems = async () => {
  const snapshot = await getDocs(collection(db, "items"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
