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
            <div className="aboutDireita">
              <p className="descricaoAbout">Olá, sou Daniel, desenvolvedor web apaixonado 
                por tecnologia e inovação. Tenho experiência em <br /> <strong>front-end</strong>, trabalhando
                 com HTML5, CSS3, JavaScript e WordPress, além de conhecimento em Git 
                 e GitHub, ferramentas essenciais para versionamento e colaboração de projetos.

Atualmente, estou me aprofundando no ecossistema do front-end com React e, em breve,
 pretendo explorar o <strong>Next.js</strong>, visando uma abordagem full stack com esse framework moderno e completo.

Minha missão é desenvolver sites e aplicações que não apenas atendam às necessidades
 dos usuários, mas que também sejam funcionais, responsivos e visualmente agradáveis.
  Sempre em busca de novos desafios, estou aberto a aprender e evoluir continuamente
   como desenvolvedor, com foco em entregar projetos de alta qualidade que realmente
    façam a diferença no mundo digital.</p>
                  <div >
                  <a href="/CURRICULO ATUALIZADO - TECH.pdf" target='_blank' className="botaoCurriculo"> Baixe meu CV</a>
                </div>
                </div>
                
        </div>
        <h2 className='aboutH2'>
                Um Pouco sobre mim...</h2>
    </div>
  )
}

export default About