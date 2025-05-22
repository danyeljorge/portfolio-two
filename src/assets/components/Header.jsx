import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div id='home'>
        <header>
            <nav className={style.menu}>
                <a href="../index.html"><img className={style.logo} src="/logo.png" alt="logo Dev Daniel" /></a>
                <ul className={style.listaMenu}>
                    <a href="#home"><li className={style.menu}>Home</li></a>
                    <a href="#sobre"><li>Sobre Mim</li></a>
                    <a href="#skils"><li>Skils</li></a>
                    <a href="#servicos"><li>Serviços</li></a>
                    <a href="#projetos"><li>Projetos</li></a>                    
                    <a href="/CURRICULO ATUALIZADO - TECH.pdf" target='_blank'><li>Curriculum</li></a>
                    
                    <div className={style.contato}>
                <ul className={style.listaMenu}>
                    <a href="#contatos"><li>Contato</li></a>
                   
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
            </nav>

            <div className={style.conteiner}>
            <div className={style.conteinerEsquerda}>
                <h1 className={style.titulo}>
                    SEU DESENVOLVERDOR <br /><span>FRONT-END</span> DE CONFIANÇA
                </h1>
                <form className={style.talk} >
                    <input type="text" placeholder='Digite sua ideia de projeto!' />
                    <button>Vamos Conversar?</button>
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
            <div className={style.conteinerDireita}>
                <img src="/expert2.webp" alt="DESENVOLVEDOR DE SOFTWARE DANIEL JORGE" />
                <div className={style.arrowExpert}>
                <i class="bi bi-arrow-down-right-circle-fill"></i>
                </div>
            </div>
        </div>
        </header>
       
    </div>
  )
}

export default Header