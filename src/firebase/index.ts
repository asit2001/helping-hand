import { initializeApp} from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database";
import { AllServices } from "../type";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig)
getDatabase(app);

export default function getAllData(setData:React.Dispatch<React.SetStateAction<AllServices[] | undefined>>){
  const db = getDatabase();
  const starCountRef = ref(db, 'services');
  onValue(starCountRef, (snapshot) => {
    const data:AllServices[] = snapshot.val();
    setData([...data])
  });  
}

