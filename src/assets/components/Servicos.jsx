import React from 'react'
import './Servicos.css'

const Servicos = () => {
  return (
    <div className='conteinerServicos' id='servicos'>
      <div className="maskServece">
        <div className="conteinerServece">
        <div className="descricaoServicos">
          <div className="descricaoTitulo"><h2> SOLUÇÕES INTELIGENTES EM DESENVOLVIMENTO FRONT-END</h2></div>
          <div className="descricaoConteudo"><p>ou especializado na criação de interfaces modernas, responsivas e otimizadas para a melhor experiência do usuário. Desenvolvo soluções personalizadas com foco em performance, acessibilidade e integração eficiente com o back-end. Cada projeto é pensado sob medida, alinhado com os objetivos e necessidades específicas do cliente.</p>
          <a href="https://api.whatsapp.com/send?phone=5521998452350&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto." target="_blank">
          Saiba Mais</a></div>
        </div>
        
        </div>
      </div>
      <div className="Servicos"><h3>Nossos Serviços</h3></div>
      <div className="cards">
          <div className="card">
            <div className='cardConteiner'>
            <div className="cardTitulo "><i class="bi bi-code-square"></i><h3 >Sites Responsivos</h3></div>
            <div className="cardConteudo"><p className='hidenn'>Crio sites que se adaptam perfeitamente a qualquer dispositivo (desktop, tablet e mobile), garantindo a melhor experiência para o usuário.</p></div>
            <div className="include hidenn">
              <ul>
                <li>Design adaptável</li>
                <li>Otimização para diferentes telas</li>
                <li>Navegação intuitiva</li>
              </ul>
            </div>
            <div className="buttonCard hidenn"><a href="https://api.whatsapp.com/send?phone=5521998452350&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto." target="_blank">Começar</a></div>
            </div>

            <div className='cardConteiner'>
            <div className="cardTitulo"><i class="bi bi-funnel-fill"></i><h3>Landing Pages Estratégica</h3></div>
            <div className="cardConteudo"><p className='hidenn'>Desenvolvo páginas de destino focadas em alcançar seus objetivos de marketing, como geração de leads ou vendas</p></div>
            <div className="include hidenn">
              <ul>
                <li>Design estratégico focado em conversão</li>
                <li>Formulários otimizados</li>
                <li>Chamadas para ação claras</li>
              </ul>
            </div>
            <div className="buttonCard hidenn"><a href="https://api.whatsapp.com/send?phone=5521998452350&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto." target="_blank">Começar</a></div>
            </div>

      
            <div className='cardConteiner'>
            <div className="cardTitulo"><i class="bi bi-sliders"></i><h3>Otimização e Suporte</h3></div>
            <div className="cardConteudo"><p className='hidenn'>Ajudo a manter seu site atualizado, seguro e rápido, garantindo que ele funcione de forma eficiente e ofereça uma ótima experiência.</p></div>
            <div className="include hidenn">
              <ul>
                <li>Atualizações de segurança</li>
                <li>Melhorias de velocidade</li>
                <li>Correção de bugs</li>
              </ul>
            </div>
            <div className="buttonCard hidenn"><a href="https://api.whatsapp.com/send?phone=5521998452350&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto." target="_blank">Começar</a></div>
            </div>


          </div>
        </div>
    <div className="divisorTop"></div>
    </div>
  )
}

export default Servicos