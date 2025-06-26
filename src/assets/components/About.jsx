
import "./About.css"
import ScrollReveal from "./ScrollReveal"

const About = () => {
  return (
    <div className='conteinerAbout' id='sobre'>
        <div className="imgAbout"></div>
        <div className="about">
            <div className="aboutEsquerda">
              <ScrollReveal options={{
                origin: "left",
                distance: '100px',
                duration: 1000,
                delay: 200,
                reset: true,
                opacity: 0,
                scale: 1,
                interval: 100,
                easing: "ease"
              }}>
                <img className='aboutImg' src="/sobreMim.webp" alt="Foto de Daniel Jorge" />
              </ScrollReveal>
            </div>
            <div className="aboutDireita">
              <ScrollReveal options={{
                origin: "right",
                distance: '0px',
                duration: 1000,
                delay: 300,
                reset: true,
                opacity: 0,
                scale: 1,
                interval: 100,
                easing: "ease"
              }}>
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
    </ScrollReveal>
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