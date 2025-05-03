import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='conteinerAbout'>
        <div className="imgAbout"></div>
        <div className="about">
            <div className="aboutEsquerda">
                <img className='aboutImg' src="/sobreMim.webp" alt="Foto de Daniel Jorge" />
            </div>
            <div className="aboutDireita"><h2>
                Um Pouco sobre mim...</h2>
                </div>
        </div>
    </div>
  )
}

export default About