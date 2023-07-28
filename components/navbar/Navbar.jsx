"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';

import AddSharpIcon from '@mui/icons-material/AddSharp';
import PostModal from '../modal/Modal';

import { useAuth } from '../../context/authContext';

const Navbar = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const {signOut}=useAuth()
  return  (
    <div className={styles.container}>
      <div className={styles.childContainer}>
        <div className={styles.logo}><InstagramIcon sx={{ width: 50, height: 50 }}/></div>
        <div>
            <input type="text"/>
        </div>
        <div className={styles.icons}>
        <div className={styles.add} onClick={() => setModal2Open(true)} ><AddSharpIcon sx={{ width: 35, height: 35 }}/></div>
            <FavoriteBorderOutlinedIcon/>
            
            <PostModal setModal2Open={setModal2Open} modal2Open={modal2Open}  />
            <div className={styles.logOut}><LogoutIcon onClick={signOut} /></div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
