"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'

import PostCard from '../../components/postCard/PostCard'
import styles from "./page.module.css"
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import Image from 'next/image'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import useFirebaseAuth, { useAuth } from '../../context/authContext'
import { useRouter } from 'next/navigation'
const feed = () => {
  const {isLoading,authUser}=useAuth()
  const [message, setMessage] = useState("");
  const router=useRouter()
  useEffect(()=>{
    if(!authUser)
    {router.push("/login")}
  },[authUser,isLoading])
  return isLoading?<div>Loading...</div>: (
    <div >
      <div className={styles.navCont}>
      <Navbar/>
      </div>
      <div className={styles.container}>
        <div className={styles.main}>
        <section className={styles.postSec}>
          <div className={styles.top}>
            <div>testingName</div>
            <div><MoreHorizSharpIcon/></div>
          </div>
          <div className={styles.imgCont}>
            <Image className={styles.img} fill={true} src="/testPost.jpg"/>
          </div>
          <div className={styles.interaction}>
            <div className={styles.interactionLeft}>
              <div><FavoriteBorderSharpIcon/></div>
              <div><ChatBubbleOutlineSharpIcon/></div>
              <div><SendRoundedIcon/></div>
              </div>
            <div><BookmarkBorderOutlinedIcon/></div>
          </div>
          <div className={styles.commentSec}>
            <span>1 like</span>
            <span><strong>testing</strong> 123</span>
            <span><strong>testing</strong> 321</span>
            <input className={styles.comment} onChange={e=>setMessage(e.target.value)} value={message} placeholder='Enter comment' type='text'/>
          </div>
          
        </section>
        <section className={styles.postSec}>
          <div className={styles.top}>
            <div>testingName</div>
            <div><MoreHorizSharpIcon/></div>
          </div>
          <div className={styles.imgCont}>
            <Image className={styles.img} fill={true} src="/testPost.jpg"/>
          </div>
          <div className={styles.interaction}>
            <div className={styles.interactionLeft}>
              <div><FavoriteBorderSharpIcon/></div>
              <div><ChatBubbleOutlineSharpIcon/></div>
              <div><SendRoundedIcon/></div>
              </div>
            <div><BookmarkBorderOutlinedIcon/></div>
          </div>
          <div className={styles.commentSec}>
            <span>1 like</span>
            <span><strong>testing</strong> 123</span>
            <span><strong>testing</strong> 321</span>
            <input className={styles.comment} onChange={e=>setMessage(e.target.value)} value={message} placeholder='Enter comment' type='text'/>
          </div>
          
        </section>
        <section className={styles.postSec}>
          <div className={styles.top}>
            <div>testingName</div>
            <div><MoreHorizSharpIcon/></div>
          </div>
          <div className={styles.imgCont}>
            <Image className={styles.img} fill={true} src="/testPost.jpg"/>
          </div>
          <div className={styles.interaction}>
            <div className={styles.interactionLeft}>
              <div><FavoriteBorderSharpIcon/></div>
              <div><ChatBubbleOutlineSharpIcon/></div>
              <div><SendRoundedIcon/></div>
              </div>
            <div><BookmarkBorderOutlinedIcon/></div>
          </div>
          <div className={styles.commentSec}>
            <span>1 like</span>
            <span><strong>testing</strong> 123</span>
            <span><strong>testing</strong> 321</span>
            <input className={styles.comment} onChange={e=>setMessage(e.target.value)} value={message} placeholder='Enter comment' type='text'/>
          </div>
          
        </section>
        </div>
        
      </div>
    </div>
  )
}

export default feed
