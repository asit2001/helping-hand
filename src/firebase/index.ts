import { initializeApp} from "firebase/app";
import { getDatabase, ref, onValue, set,get} from "firebase/database";
import {createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword} from 'firebase/auth'
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
const auth = getAuth(app);
export default function getAllData(setData:React.Dispatch<React.SetStateAction<AllServices[] | undefined>>){
  const db = getDatabase();
  const starCountRef = ref(db, 'services');
  onValue(starCountRef, (snapshot) => {
    const data:AllServices[] = snapshot.val();
    setData([...data])
  });  
}

export async function registerUser(name:string,email:string,password:string) {

    let res = await createUserWithEmailAndPassword(auth,email,password);
    let uid = res.user.uid;
    let db = getDatabase();
    set(ref(db,'users/'+uid),{
      name,
      email
    })
}
export async function registerServerProvider(name:string,email:string,password:string,title:string,category:string,mob:string,add1:string,add2:string,city:string,pin:string,country:string="INDIA") {
  let res = await createUserWithEmailAndPassword(auth,email,password);
  let db = getDatabase();
  set(ref(db,'provider/'+res.user.uid),{
    name,
    shopeTitle:title,
    category,
    mobile:mob,
    add1,
    add2,
    city,
    pin,
    country
  })
}
export async function login(email:string,password:string,provider:boolean=false){
    let res = await signInWithEmailAndPassword(auth,email,password);
    let uid = res.user.uid;
    let url = provider?"provider/":"users/"
    const db = getDatabase();
    const Ref = ref(db, url + uid);
    const [token,data]  = await Promise.all([res.user.getIdToken(),(await get(Ref)).val()]);
    if (data) {
      localStorage.setItem('auth',token);
      return {...data,token}
    }else{
      throw({message:`You are not a ${url.replace("/","")}`});
    }

}