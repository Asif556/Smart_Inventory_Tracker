// Firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase ,set,ref} from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAM6PV2pMY1HUUZ1asW6cA5dDxGRKiho68",
  authDomain: "inventory-management-93042.firebaseapp.com",
  projectId: "inventory-management-93042",
  storageBucket: "inventory-management-93042.appspot.com",
  messagingSenderId: "335925214706",
  appId: "1:335925214706:web:20265f6b42683fa6bfff6b",
  measurementId: "G-ESRD0P0WZ2",
  databaseURL: "https://inventory-management-93042-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const putdata=(key,data)=>set(ref(database,key),data)

export default app; 
export { database,putdata};
