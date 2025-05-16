import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Skils.css'


const Skils = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        speed: 5000,
        centerMode: false,
    centerPadding: '0px',
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
        
        
    };
 return (
    <div className='sliderConteiner'>
<h1 className='mySkils'>Minhas Skils</h1>
        <div className="slider">
            <Slider {...settings}>
            <div className='conteinerIconstest'>
        <div className="conteinerIcons"><img src="/html5.svg" alt="LOGO HTML5" className='skilIcons' /></div>
      </div>
      <div className='conteinerIconstest'>
      <div className="conteinerIcons"><img src="/css.svg" alt="LOGO CSS" className='skilIcons' /></div>
      </div>
      <div className='conteinerIconstest'>
      <div className="conteinerIcons"><img src="/javascript.svg" alt="LOGO JAVASCRIPT" className='skilIcons' /></div>
      </div >
      <div className='conteinerIconstest'>
      <div className="conteinerIcons"><img src="/react_light.svg" alt="LOGO REACT" className='skilIcons' /></div>
      </div>
      <div className='conteinerIconstest'>
      <div className="conteinerIcons"><img src="/wordpress.svg" alt="LOGO WORDPRESS" className='skilIcons' /></div>
      </div>
      <div className='conteinerIconstest'>
      <div className="conteinerIcons"><img src="/github_dark.svg" alt="LOGO GIT HUB"className='skilIcons' /></div>
      </div>
      <div className='conteinerIconstest'>
      <div className="conteinerIcons"><img src="/vscode_icon.png" alt="LOGO VS CODE"className='skilIcons' /></div>
      </div>
      <div className='conteinerIconstest'>
      <div className="conteinerIcons"><img src="/photoshop_icon.png" alt="LOGO PHOTOSHOP"className='skilIcons' /></div>
      </div>
      <div className='conteinerIconstest'>
      <div className="conteinerIcons"><img src="/Figma-logo.svg" alt="LOGO FIGMA"className='skilIcons' /></div>
      </div>
      
      
            </Slider>
        </div>
    </div>
  )
}

export default Skils