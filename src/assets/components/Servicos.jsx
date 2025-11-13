import React from 'react'
import './Servicos.css'
import ScrollReveal from "./ScrollReveal"

const Servicos = () => {
  return (
    <div className='conteinerServicos' id='servicos'>
      <div className="maskServece">
        <div className="conteinerServece">
        <div className="descricaoServicos">
          <div className="descricaoTitulo"><h2> SOLUÇÕES WEB PROFISSIONAIS PARA QUEM ESTÁ COMEÇANDO — SEM COMPLICAR E SEM COBRAR CARO</h2></div>
          <div className="descricaoConteudo"><p>Sou desenvolvedor especializado em criar experiências digitais que realmente funcionam.
Nada de templates genéricos: cada projeto é construído sob medida, com foco em:
<ul>
<li> <strong>* Identidade Profissional</strong></li>

<li><strong>* Velocidade e Performance </strong></li>

<li><strong>* Responsividade Real</strong></li>

<li><strong>* Design Moderno</strong></li>

<li><strong>* Facilidade de Manutenção</strong></li>
</ul>
É a solução ideal para quem quer começar certo, investir pouco e ainda assim ter um site com nível profissional.</p>
          {/* <a href="https://api.whatsapp.com/send?phone=5521998452350&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto." target="_blank">
          Saiba Mais</a>*/ }</div>
        </div>
        
        </div>
      </div>
      <div className="Servicos"><h3>Nossos Serviços</h3></div>
      <div className="cards">
          <div className="card">
            <ScrollReveal options={{ origin: 'bottom', reset:true, distance: '100px', duration: 1000, delay: 200, easing: 'ease-in-out' }}>
            <div className='cardConteiner'>
            <div className="cardTitulo "><i class="bi bi-code-square"></i><h3 >Site Profissional Responsivo</h3></div>
            <div className="cardConteudo"><p className='hidenn'>Para quem precisa de um site completo, bonito e funcional para apresentar seu negócio.</p></div>
            <div className="include hidenn">
              <ul>
                <li>Layout totalmente personalizado</li>
                <li>Compatível com celular, tablet e desktop</li>
                <li>Estrutura focada em conversão</li>
                <li>SEO básico incluso</li>
                <li>Entrega rápida</li>
              </ul>
            </div>
            <div className="buttonCard hidenn"><a href="https://api.whatsapp.com/send?phone=5521998452350&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto." target="_blank">Começar</a></div>
            </div>

            </ScrollReveal>

           <ScrollReveal options={{ origin: 'bottom', reset:true, distance: '100px', duration: 1000, delay: 400, easing: 'ease-in-out' }}>
             <div className='cardConteiner'>
            <div className="cardTitulo"><i class="bi bi-funnel-fill"></i><h3>Landing Page Estratégica</h3></div>
            <div className="cardConteudo"><p className='hidenn'>Para quem quer vender, captar leads ou divulgar um serviço específico</p></div>
            <div className="include hidenn">
              <ul>
                <li>Página única focada em conversão</li>
                <li>Copy otimizada para destacar sua oferta</li>
                <li>Velocidade alta e carregamento leve</li>
                <li>Formulários conectados</li>
                <li>Design limpo e direto ao ponto</li>
              </ul>
            </div>
            <div className="buttonCard hidenn"><a href="https://api.whatsapp.com/send?phone=5521998452350&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto." target="_blank">Começar</a></div>
            </div>

            </ScrollReveal>

      <ScrollReveal options={{ origin: 'bottom', distance: '100px', duration: 1000, delay: 600, easing: 'ease-in-out', reset: true }}>
            <div className='cardConteiner'>
            <div className="cardTitulo"><i class="bi bi-sliders"></i><h3>Manutenção, Suporte e Melhorias</h3></div>
            <div className="cardConteudo"><p className='hidenn'>Para quem já tem um site, mas precisa que ele funcione melhor.</p></div>
            <div className="include hidenn">
              <ul>
                <li>Correção de bugs</li>
                <li>Atualizações de segurança</li>
                <li>Otimizações de velocidade</li>
                <li>Revisões de design</li>
                <li>Suporte contínuo</li>
              </ul>
            </div>
            <div className="buttonCard hidenn"><a href="https://api.whatsapp.com/send?phone=5521998452350&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto." target="_blank">Começar</a></div>
            </div>
</ScrollReveal>

          </div>
        </div>
    
    </div>
  )
}

export default Servicos