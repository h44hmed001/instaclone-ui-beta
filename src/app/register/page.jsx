"use client"
import styles from './page.module.css'
import Lottie from 'react-lottie-player'
import Animation from "../../../public/instaAnimation.json"
import GoogleIcon from '@mui/icons-material/Google';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { auth } from '../../../firebase/firebase';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { useAuth } from '../../../context/authContext';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router=useRouter()
  const[user,setUser]=useState({
    email:"",
    password:"",
    userName:""
  })

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  
  const {authUser,setAuthUser,isLoading}=useAuth()
  const handleRegister=async()=>{
    if (!user.email || !user.password || !user.userName) return;
    try {
        await createUserWithEmailAndPassword(
            auth,
            user.email,
            user.password
        );
        await updateProfile(auth.currentUser, {
            displayName: user.userName,
        });
        setAuthUser({
            uid: user.uid,
            email: user.email,
            userName:user.userName
        });
    } catch (error) {
        console.error("An error occured", error);
    }
}
useEffect(()=>{
  if(!isLoading&&authUser){
    router.push("/")
  }
},[isLoading,authUser])
  
 
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
       <input required className={styles.input} onChange={e=>setUser((prev)=>({...prev,userName:e.target.value}))} value={user.userName} placeholder='Username' type="text"/>
          <input required className={styles.password} onChange={e=>setUser((prev)=>({...prev,password:e.target.value}))} value={user.password} placeholder='Password' type="password"/>
            <button type='submit' disabled={!user.email||!user.password||!user.userName} onClick={handleRegister} className={styles.button} >Sign Up</button>
          
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
          Have an account? <Link href="/login" className={styles.signUpLink}> Login</Link>
        </div>
        </div>
      </div>
    </div>
  )
}
