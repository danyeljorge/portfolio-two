
import style from './Header.module.css'
import MobileDrawer from './MobileDrawer'
import { Link as ScrollLink } from 'react-scroll'
import ScrollReveal from "./ScrollReveal"
import { useState } from "react";



const Header = () => {

  const [ideia, setIdeia] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (ideia.trim() === "") {
      alert("Por favor, escreva sua ideia antes de enviar 😉");
      return;
    }
     const numeroWhatsApp = "5521998452350"; 
    const mensagem = `Olá, vi seu portfólio e gostaria de conversar sobre um projeto. Minha ideia é: ${ideia}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
    setIdeia("");
  };

  return (
    <div id='home'>
        <header>
            <nav className={style.menu}>
                <a href="../index.html"><img className={style.logo} src="/logo.png" alt="logo Dev Daniel" /></a>
                <ul className={style.listaMenu}>
                    <ScrollLink to="home" style={{ cursor: 'pointer' }} smooth={true} duration={500} offset={-80} className={style.menu}>
              <li>Home</li>
            </ScrollLink>
            <ScrollLink to="sobre" style={{ cursor: 'pointer' }} smooth={true} duration={500} offset={-80}>
              <li>Sobre Mim</li>
            </ScrollLink>
            <ScrollLink to="skils" style={{ cursor: 'pointer' }} smooth={true} duration={500} offset={0}>
              <li>Skils</li>
            </ScrollLink>
            <ScrollLink to="servicos" style={{ cursor: 'pointer' }} smooth={true} duration={500} offset={-80}>
              <li>Serviços</li>
            </ScrollLink>
            <ScrollLink to="projetos" style={{ cursor: 'pointer' }} smooth={true} duration={500} offset={-80}>
              <li>Projetos</li>
            </ScrollLink>
            <a href="/CURRICULO ATUALIZADO - TECH.pdf" target='_blank'>
              <li>Curriculum</li>
            </a>
            <div className={style.contato}>
              <ul className={style.listaMenu}>
                <ScrollLink to="contatos" style={{ cursor: 'pointer' }} smooth={true} duration={500} offset={-80}>
                  <li>Contato</li>
                </ScrollLink>
              </ul>
            </div>
          </ul>
                <div >
                <ul className={style.listaMenu}>
                    <a href="#"><li><iframe 
                    src="https://ghbtns.com/github-btn.html?user=danyeljorge&repo=portfolio-two&type=star&count=true&size=large" 
                    frameborder="0" 
                    scrolling="0" 
                    width="150" 
                    height="30" 
                    title="GitHub"
                    ></iframe>
                    </li></a>
                   
                </ul>
                </div>
                <div className={style.burguer}>
                    <MobileDrawer/>
                    </div>
            </nav>

            <div className={style.conteiner}>
            <div className={style.conteinerEsquerda}>
              <ScrollReveal options={{origin: "right", distance:'0px', duration: 1000, delay: 200, reset: true, opacity: 0, scale: 1, interval: 100}}>
                <h1 className={style.titulo}>
                    SEU DESENVOLVEDOR <br /><span>FRONT-END</span> DE CONFIANÇA
                </h1>
                </ScrollReveal>
                <form className={style.talk} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Digite sua ideia de projeto!'
                    value={ideia}
                    onChange={(e) => setIdeia(e.target.value)} />
                    <button type='submit'>Vamos Conversar?</button>
                </form>
                <p className={style.descricao}>
                    Desenvolvedor especializado em Html, CSS, JavaScript e React. 
                    Ajudo empresas e profissionais a criarem sites rápidos, bonitos,
                    e com ótima experiência para o usuário.</p>

                    <div className={style.skilTech}>
                        <img src="/vscode_icon.png" alt="LOGO VSCODE" />
                        <img src="/photoshop_icon.png" alt="LOGO PHOTOSHOP" />
                        <img src="/Figma-logo.svg" alt="LOGO FIGMA" />
                    </div>
            </div>
            <div className={style.conteinerDireita + " " + style.hidenn}>
              {/* ScrollReveal animation */}
              <ScrollReveal>
                <img className={style.expert} src="/expert2.webp" alt="DESENVOLVEDOR DE SOFTWARE DANIEL JORGE" /> 
              </ScrollReveal>
                <div className={style.arrowExpert}>
                <ScrollLink to="sobre" style={{ cursor: 'pointer' }} smooth={true} duration={500} offset={100} ><i class="bi bi-arrow-down-right-circle-fill"></i></ScrollLink>
                </div>
            </div>
        </div>
        </header>
       
    </div>
  )
}

export default Header