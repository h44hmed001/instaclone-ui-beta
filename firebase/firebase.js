import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDGyJdXMk85cpYDiTPQWTKA10EQl2zlwps",
  authDomain: "instaclone-8808c.firebaseapp.com",
  projectId: "instaclone-8808c",
  storageBucket: "instaclone-8808c.appspot.com",
  messagingSenderId: "576537887428",
  appId: "1:576537887428:web:51e0ec3f57972656f37f91"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
