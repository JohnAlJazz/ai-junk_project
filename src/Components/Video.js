import React from 'react'
import { useRef, useState } from 'react'
import { useGlobalContext } from '../context'
import YouTube from 'react-youtube'
import Question from './Question'

const YouTubeVideo = () => {
  const { setIsVideoEnded } = useGlobalContext();
  const videoRef = useRef(null);

  const youtubeVideoId = 'ioblgpA5eTo';
  const opts = {
    height: '330',
    width: '640',
  }
  
  const handlePlay = () => {
   if(videoRef.current) {
    videoRef.current.internalPlayer.playVideo();    
   }
  }
  const handlePause = () => {
    if(videoRef.current) {
      videoRef.current.internalPlayer.pauseVideo();      
    }
  }
  const handleEndOfVideo = () => {
   setIsVideoEnded(true);
  } 

  return (
    <div>
      <YouTube
        videoId={youtubeVideoId}
        opts={opts}
        onEnd={handleEndOfVideo}
        ref={videoRef}
      />
      <button className={`player-button`} onClick={handlePlay}>        
        play
      </button>
      <button className={`player-button`} onClick={handlePause}>        
        pause
      </button>      
    </div>
  )
}

export default YouTubeVideo