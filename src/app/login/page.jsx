"use client"
import styles from './page.module.css'
import Lottie from 'react-lottie-player'
import Animation from "../../../public/instaAnimation.json"
import GoogleIcon from '@mui/icons-material/Google';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/firebase';
import { useAuth } from '../../../context/authContext';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router=useRouter()
  const {isLoading,authUser}=useAuth()
  const[user,setUser]=useState({
    email:"",
    password:"",
  })
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  const handleLogin=()=>{
    if(user.email&&user.password)
    {signInWithEmailAndPassword(auth, user.email, user.password)}return;
  }
  useEffect(() => {
    if (!isLoading && authUser) {
        router.push("/");
    }
}, [authUser, isLoading]);

  return (
    <div className={styles.container}>
      <div className={styles.centContainer}>
        <div className={styles.animation}><Lottie
      loop
      animationData={Animation}
      play
       className={styles.insta}
    /></div>
        <div className={styles.login} >
          <div className={styles.formCont}>
          <form onSubmit={handleSubmit} className={styles.form}>
          <input required className={styles.input} onChange={e=>setUser((prev)=>({...prev,email:e.target.value}))} value={user.email} placeholder='Email' type="email"/>
          
          <input required className={styles.password} onChange={e=>setUser((prev)=>({...prev,password:e.target.value}))} value={user.password} placeholder='Password' type="password"/>
          
          <button type='submit' onClick={handleLogin} disabled={!user.email||!user.password} className={styles.button} >Log in</button>
         
          <div className={styles.orBlock}>
            <div className={styles.line}/>
            OR
            <div className={styles.line}/>
          </div>
          
        </form>
        <div className={styles.googleBlock}>
        <GoogleIcon/>
        <div>Login with Google</div>
        </div>
        </div>
        <div className={styles.signUp}>
          Don't have an account? <Link href="/register" className={styles.signUpLink}>SignUp</Link>
        </div>
        </div>
      </div>
    </div>
  )
}
