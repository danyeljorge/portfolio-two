import React from 'react'
import style from "./Footer.module.css"

const Footer = () => {
  return (

    <>
    <div className={style.rodape}>

<div className={style.coteudoRodape}>
  <div className={style.conteiner0}>
    <h3>DEV.DANIEL</h3>
    <p>Transformando ideias em código com 
      soluções front-end personalizadas.
    </p>
  </div>
  <div className={style.conteiner}>  </div>
  <div className={style.conteiner1}>
    <h3>Links</h3>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Sobre Mim</a></li>
      <li><a href="#">Projetos</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </div>
  <div className={style.conteiner1}>
  <h3>Rede</h3>
  <div className={style.links}>

    <ul>
  <li><a href="#"><i class="bi bi-instagram"></i></a></li>
      <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
      <li><a href="#"><i class="bi bi-github"></i></a></li>
      <li><a href="#"><i class="bi bi-youtube"></i></a></li>
      </ul>
      </div>


  </div>
</div>
    </div>
    <div className={style.copyRight}>
      <p className={style.copy}>&copy; 2025 Dev.Daniel - Todos os Direitos Reservados.</p>
      </div>

      <div className={style.whatsapp}>
        <a href="https://api.whatsapp.com/send?phone=5521998452350&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto." target="_blank">
        <i class="bi bi-whatsapp"></i></a>
      </div>
    </>
  )
}

export default Footer