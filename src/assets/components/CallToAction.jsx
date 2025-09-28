import React from 'react'
import './CallToAction.css'


const CallToAction = () => {
  return (
    <div className='conteinerVideo'>
        <video autoPlay muted loop className="backVideo">
            <source src="/back-video.mp4" type="video/mp4"/>
        </video>

        <div className="overlayVideo"></div>

        <div className="conteudoVideoConteiner">
            <h1 className='conteudoVideo'> Programar é transformar café em código </h1>
        </div>
    </div>
  )
}

export default CallToAction