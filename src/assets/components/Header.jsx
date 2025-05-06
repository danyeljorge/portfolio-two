import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <header>
            <nav className='menu'>
                <img className='logo' src="/logo.png" alt="logo Dev Daniel" />
                <ul className='listaMenu'>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Sobre Mim</li></a>
                    <a href="#"><li>Skils</li></a>
                    <a href="#"><li>Serviços</li></a>
                    <a href="#"><li>Projetos</li></a>                    
                    <a href="/CURRICULO ATUALIZADO - TECH.pdf" target='_blank'><li>Curriculum</li></a>
                    <li><iframe 
  src="https://ghbtns.com/github-btn.html?user=danyeljorge&repo=portfolio-two&type=star&count=true&size=large" 
  frameborder="0" 
  scrolling="0" 
  width="150" 
  height="30" 
  title="GitHub"
></iframe>
</li>
                </ul>
                <div className="contato">
                <ul className='listaMenu'>
                    <a href="#"><li>Contato</li></a>
                   
                </ul>
                </div>
            </nav>

            <div className="conteiner">
            <div className="conteinerEsquerda">
                <h1 className="titulo">
                    SEU DESENVOLVERDOR <br /><span>FRONT-END</span> DE CONFIANÇA
                </h1>
                <form className='talk' >
                    <input type="text" placeholder='Digite sua ideia de projeto!' />
                    <button>Vamos Conversar?</button>
                </form>
                <p className="descricao">
                    Desenvolvedor especializado em Html, CSS, JavaScript e React. 
                    Ajudo empresa e profissionais a crearem sites rápidos, bonitos,
                    e com ótima experiência para o usuário.</p>

                    <div className="skilTech">
                        <img src="/vscode_icon.png" alt="LOGO VSCODE" />
                        <img src="/photoshop_icon.png" alt="LOGO PHOTOSHOP" />
                        <img src="/Figma-logo.svg" alt="LOGO FIGMA" />
                    </div>
            </div>
            <div className="conteinerDireita">
                <img src="/expert2.webp" alt="DESENVOLVEDOR DE SOFTWARE DANIEL JORGE" />
                <div className="arrowExpert">
                <i class="bi bi-arrow-down-right-circle-fill"></i>
                </div>
            </div>
        </div>
        </header>
       
    </div>
  )
}

export default Header