import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUmk5Efw72r0q1rExWs_nO_y39u6YVdQs",
  authDomain: "todoapp-97d12.firebaseapp.com",
  projectId: "todoapp-97d12",
  storageBucket: "todoapp-97d12.appspot.com",
  messagingSenderId: "859742832557",
  appId: "1:859742832557:web:e95c848d1a4bdba6cd8324",
  measurementId: "G-P8X0F00QLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Firestore instance
const db = getFirestore(app);

// Export the app and db objects
export { app, db };