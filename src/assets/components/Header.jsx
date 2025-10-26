
import style from './Header.module.css'
import MobileDrawer from './MobileDrawer'
import { Link as ScrollLink } from 'react-scroll'
import { scroller } from 'react-scroll'
import StaggeredMenu from './StaggeredMenu';
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

  const scrollOptions = {
  smooth: true,
  duration: 500, 
};

const socialItems = [

]; 

const handleScrollTo = (id, offset) => {
  
  scroller.scrollTo(id, {
    ...scrollOptions,
    offset: offset 
  });
};

const menuItems = [
  
  { label: 'Home', id: 'home', offset: -80, isScrollLink: true },
  { label: 'Sobre Mim', id: 'sobre', offset: -120, isScrollLink: true },
  { label: 'Skils', id: 'skils', offset: 0, isScrollLink: true },
  { label: 'Serviços', id: 'servicos', offset: -80, isScrollLink: true },
  { label: 'Projetos', id: 'projetos', offset: -170, isScrollLink: true },
  { label: 'Contato', id: 'contatos', offset: -80, isScrollLink: true },
  
  { label: 'Curriculum', link: '/CURRICULO ATUALIZADO - TECH.pdf', target: '_blank' }
];

  const handleItemClick = (item) => {
      
      if (item.isScrollLink && item.id) {
          handleScrollTo(item.id, item.offset);
      }
      
  };

  return (
    <div id='home'>
        <header>
          
          {/*
          <div className={style.topo}>
            <div className={style.email}><i class="bi bi-envelope-at-fill"> danyeljorge@outlook.com</i></div>
            <div className={style.sociais}>
              <div className={style.zap}><a href="https://api.whatsapp.com/send?phone=5521998452350&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto." target='_blank'><i class="bi bi-whatsapp"> +55 21 99845-2350</i></a></div>
              <div className={style.instagram}><a href="https://www.instagram.com/danyeljorgee/" target="blank"> <i class="bi bi-instagram"> @devdanieljorge</i></a></div>
            </div> 
            </div>
            */}
            <nav className={style.menu}>
              <a href="../index.html"><img className={style.logo} src="/logo.png" alt="logo Dev Daniel" /></a>
                
 

            <div style={{ height: '100vh', background: '#1a1a1a' }}>
      
             <StaggeredMenu
        position="right"
        items={menuItems} 
        socialItems={socialItems} 
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#fff', '#005F01']}
        accentColor="#fff"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
        onItemClick={handleItemClick} 
      />
      </div>
      <div className={style.webMail}> <a href="https://vps.devdanieljorge.com.br:8090/snappymail/index.php/" target='_blank'><i class="bi bi-envelope-at-fill"></i> </a></div>
            </nav>

            <div className={style.conteiner}>
            <div className={style.conteinerEsquerda}>
              <ScrollReveal options={{origin: "right", distance:'0px', duration: 1000, delay: 200, reset: true, opacity: 0, scale: 1, interval: 100}}>
                <h1 className={style.titulo}>
                    SEU DESENVOLVEDOR <br />
                    <RotatingText
                      texts={['WEB', 'FRONT-END', 'FULL-STACK']}
                      mainClassName="inline-flex px-2 sm:px-2 md:px-3 bg-[#73FF00] font-extrabold overflow-hidden py-2 px-2 sm:py-1 md:py-2 justify-center rounded-lg"
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
