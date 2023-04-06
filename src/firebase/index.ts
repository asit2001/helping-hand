import { useEffect, useState } from 'react';
import { initializeApp} from "firebase/app";
import { getDatabase, ref, onValue, set,get} from "firebase/database";
import {createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword,sendPasswordResetEmail ,signOut, updateProfile} from 'firebase/auth'
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
export const auth = getAuth(app);
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
    updateProfile(res.user,{
      displayName:name
    });
}
export async function registerServerProvider(name:string,email:string,password:string,title:string,category:string,mob:string,add1:string,add2:string,city:string,pin:string,country:string="INDIA") {
  let res = await createUserWithEmailAndPassword(auth,email,password);
  let db = getDatabase();
  updateProfile(res.user,{
    displayName:name
  });
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
export async function login(email:string,password:string){
  await signInWithEmailAndPassword(auth,email,password);
}
export async function forgetPassword(email:string){
   try {
    await sendPasswordResetEmail(auth,email);
    return {msg:'Password reset email sent!'}
   } catch (error) {
    return {error:error};
   }
}
export function logOut(){
  signOut(auth).then(()=>{
  })
}
export async function isProvider(){ 
 return new Promise<boolean>((resolve,reject)=>{
  try {
    auth.onAuthStateChanged(async user=>{
      if (user) {
        const db = getDatabase();
        const res = await get(ref(db,`provider/${user.uid}`));
        resolve(res.exists());
      }
    })
  } catch (e) {
    reject(false);
  }
 })
}
