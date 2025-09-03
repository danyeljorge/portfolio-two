import React from 'react'
import './CallToAction.css'
import { Typewriter } from "./typewriter";

const CallToAction = () => {
  return (
    <div className='conteinerVideo'>
        <video autoPlay muted loop className="backVideo">
            <source src="/back-video.mp4" type="video/mp4"/>
        </video>

        <div className="overlayVideo"></div>

        <div>
            <h1 className='conteudoVideo'> <Typewriter className='conteudoVideo' 
            text='Programar é transformar café em código'/>  </h1>
        </div>
    </div>
  )
}

export default CallToAction