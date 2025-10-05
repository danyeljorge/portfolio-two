import React from 'react'
import './Contatos.css'
import { Link as ScrollLink } from 'react-scroll'

const Contatos = () => {
  return (
    <div className='contatos' id='contatos'>  
      <div className="contatosEsquerta">
      <h2 className='h2contatos'>Contatos</h2>
      <p className='pContatos'><a href="https://api.whatsapp.com/send?phone=5521998452350&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto." target="_blank"><i class="bi bi-whatsapp"></i> (21) 99845-2350</a></p>
      <p className='pContatos'>danyeljorge@outlook.com</p>
      </div>
      <div className="contatosDireita">
      { /* <form onSubmit={(e) => e.preventDefault()}>
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
            <textarea name="mensagem" placeholder='Digite sua mensagem' rows={10} required></textarea>
          </label>
          
        </form> 
        <button className='botaoContato' type='submit'>Enviar</button> */}
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