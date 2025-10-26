import React from 'react'
import './Contatos.css'
import { Link as ScrollLink } from 'react-scroll'

const Contatos = () => {
  return (
    <div className='contatos' id='contatos'>  
      <div className="contatosEsquerta">
      <h3 className='walkMe'>Fale Comigo</h3>
      <h1 className='walkMe_'>Junte-se a Mim na <span className='walkMeSpan'>Criação de Algo Grande</span></h1>

      <form onSubmit={(e) => e.preventDefault()}>
          <label>
            <input className='inputContato' type="text" name="nome" placeholder='Digite seu nome' required />
          </label>
          <label >
            <input className='inputContato' type="email" name="email" placeholder='Digite o seu melhor e-mail' required />
          </label>
          <label >
            <input className='inputContato' type="tel" name="telefone" placeholder='Digite seu whatsapp' required />
          </label>
          <label > 
            <textarea className='inputMensagem' name="mensagem" placeholder='Digite sua mensagem' rows={10} required></textarea>
          </label>
          <button className='botaoContato' type='submit'>Enviar</button>
        </form> 
        
      </div>
      <div className="contatosDireita">
        <div className="infoo">
       <div className="info">
        <h1>Contatos</h1>
        <p>Telefone: +55 (21) 99845-2350</p>
        <p>E-mail: contato@devdanieljorge.com.br</p>
       </div>
       <div className="atendimento">
        <h1>Atendimento</h1>
        <p>Segunda à Sexta - 09:00 às 17:00</p>
        <p>Sábado - 09:00 às 15h</p>
       </div>
       <div className="sociais">
        <a href="https://www.linkedin.com/in/danieljorgee/" target="_blank"> <i class="bi bi-linkedin"></i> </a>
        <a href="https://www.facebook.com/devdanieljorge" target="_blank"> <i class="bi bi-facebook"></i> </a>
        <a href="https://www.instagram.com/devdanieljorge/" target="_blank"> <i class="bi bi-instagram"></i> </a>
        <a href="https://github.com/danyeljorge" target="_blank"> <i class="bi bi-github"></i> </a>
        <a href="https://www.youtube.com/@trilhadacomputacao" target="_blank"> <i class="bi bi-youtube"></i> </a>

       </div>
       </div>
      </div>
<div className="setaCima">
         <ScrollLink 
        to="home"
        smooth={true}
        duration={800}
        className="seta">
          <i class="bi bi-arrow-up-square-fill"></i>
        </ScrollLink>
    </div>
    </div>
  )
}

export default Contatos