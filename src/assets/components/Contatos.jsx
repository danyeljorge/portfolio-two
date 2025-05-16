import React from 'react'
import './Contatos.css'

const Contatos = () => {
  return (
    <div className='contatos'>
      <div className="contatosEsquerta">
      <h2 className='h2contatos'>Contatos</h2>
      <p className='pContatos'>(21) 99845-2350</p>
      <p className='pContatos'>E-mail: danyeljorge@outlook.com</p>
      </div>
      <div className="contatosDireita">
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
            <textarea name="mensagem" placeholder='Digite sua mensagem' rows={10} required></textarea>
          </label>
          
        </form>
        <button className='botaoContato' type='submit'>Enviar</button>
      </div>

    </div>
  )
}

export default Contatos