"use client";

import React, { useRef, useState } from "react";
import classes from "./main-header.module.css";
import Link from "next/link";

export default function MainHeader() {
   const videoRef = useRef(null);
   const [isMuted, setIsMuted] = useState(true);
 
   const toggleMute = (e) => {
     e.preventDefault(); // prevent navigation if it's inside a Link
     if (videoRef.current) {
       videoRef.current.muted = !videoRef.current.muted;
       setIsMuted(videoRef.current.muted);
     }
   };


  return (
   <header className={classes.header}>
   <Link className={classes.logo} href="/">
     <div className={classes.logoGroup}>
       <video
         ref={videoRef}
         autoPlay
         loop
         playsInline
         muted={isMuted}
         className={classes.video}
       >
         <source src="/video/logoSplashScreen.mp4" type="video/mp4" />
         Your browser does not support the video tag.
       </video>
       <button className={classes.muteButton} onClick={toggleMute}>
         {isMuted ? "🔇" : "🔊"}
       </button>
     </div>
     Task List APP
   </Link>

     <nav className={classes.nav}>
        <ul>
            <li><Link href="/tasks">OutStanding Tasks</Link></li>
            <li><Link href="/community">Community</Link></li>
        </ul>
     </nav>
  </header>
  );
}

