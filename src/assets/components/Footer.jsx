import React from 'react'
import style from "./Footer.module.css"

const Footer = () => {
  return (

    <>
    <div className={style.rodape}>

<div className={style.coteudoRodape}>
  <div className={style.conteiner0}>
    <div><h3>DEV.DANIEL</h3>
    <p>Transformando ideias em código com 
      soluções <br /> front-end personalizadas.
    </p>
    </div>

   <div className={style.links}>

    <ul>
  <li><a href="https://www.instagram.com/danyeljorgee/" target='_blank'><i class="bi bi-instagram"></i></a></li>
      <li><a href="https://www.linkedin.com/in/danieljorgee/" target='_blank'><i class="bi bi-linkedin"></i></a></li>
      <li><a href="https://github.com/danyeljorge" target='_blank'><i class="bi bi-github"></i></a></li>
      <li><a href="https://www.youtube.com/@trilhadacomputacao" target='_blank'><i class="bi bi-youtube"></i></a></li>
      </ul>
      </div>
      
  </div>
  <div className={style.conteiner1}> 
     
     <h3>LINK ÚTEIS</h3>
    <ul>
      <li><a href="#">Sobre Mim</a></li>
      <li><a href="#">Projetos</a></li>
      
     
    </ul>
     
     </div>


  <div className={style.conteiner1}>
    <h3>SUPORTE</h3>
    <ul>
      <li><a href="#">Contatos</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Whatsapp</a></li>
      
    </ul>
  </div>
  <div className={style.conteiner1}>
  <h3>FREELANCE</h3>
  
  <ul>
      <li><a href="#">Skills</a></li>
      <li><a href="#">Serviços</a></li>
      <li><a href="#">Projeto Personalizado</a></li>
      
    </ul>

   


  </div>
</div>
    </div>
    <div className={style.copyRight}>
      <p className={style.copy}>&copy; 2025 Dev.Daniel - Todos os Direitos Reservados.</p>
      <a href="#" className={style.termo}>Termos de Uso</a>
      </div>

      <div className={style.whatsapp}>
        <a href="https://api.whatsapp.com/send?phone=5521998452350&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto." target="_blank">
        <i class="bi bi-whatsapp"></i></a>
      </div>
    </>
  )
}

export default Footer