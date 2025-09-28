
import style from './Header.module.css'
import MobileDrawer from './MobileDrawer'
import { Link as ScrollLink } from 'react-scroll'
import ScrollReveal from "./ScrollReveal"
import { useState } from "react";
import RotatingText from './RotatingText';



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
            <ScrollLink to="sobre" style={{ cursor: 'pointer' }} smooth={true} duration={500} offset={-120}>
              <li className='menuitem'>Sobre Mim</li>
            </ScrollLink>
            <ScrollLink to="skils" style={{ cursor: 'pointer' }} smooth={true} duration={500} offset={0}>
              <li>Skils</li>
            </ScrollLink>
            <ScrollLink to="servicos" style={{ cursor: 'pointer' }} smooth={true} duration={500} offset={-80}>
              <li>Serviços</li>
            </ScrollLink>
            <ScrollLink to="projetos" style={{ cursor: 'pointer' }} smooth={true} duration={500} offset={-170}>
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
                    SEU DESENVOLVEDOR <br />
                    <RotatingText
                      texts={['WEB', 'FRONT-END', 'FULL-STACK']}
                      mainClassName="inline-flex px-4 sm:px-2 md:px-3 bg-[#73FF00] text-black overflow-hidden py-2 px-2 sm:py-1 md:py-2 justify-center rounded-lg"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                     /> 
                     DE CONFIANÇA
                </h1>
                </ScrollReveal>
                <form className={style.talk} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Digite sua ideia de projeto!'
                    value={ideia}
                    onChange={(e) => setIdeia(e.target.value)} />
                    <button type='submit'>Vamos Conversar?</button>
                </form>
                <p className={style.descricao}>
                    Desenvolvedor Web especializado em Html, CSS, JavaScript e React. 
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
                <ScrollLink to="sobre" style={{ cursor: 'pointer' }} smooth={true} duration={500} offset={-120} ><img src="/arrow.png" alt="seta" /></ScrollLink>
                </div>
            </div>
        </div>
        </header>
       
    </div>
  )
}

export default Header
