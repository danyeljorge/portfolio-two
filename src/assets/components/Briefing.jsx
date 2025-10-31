import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import './Briefing.css'



const Briefing = () => {
const form = useRef();
const [status, setStatus] = useState('idle'); // idle | sending | success | error

const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .sendForm(
        'service_mvx5sv5',
        'template_dhy8l7c',
        form.current,
        {
          publicKey: '5IRO9JJotFdWF3qF4',
        }
      )
      .then(
        () => {
          setStatus('success');
          if (form.current) form.current.reset();
        },
        () => {
          setStatus('error');
        }
      );
    };





  return (
    <div className="briefing"> 
    <div className="logo"><a href="https://devdanieljorge.com.br/"><img src="./logo.png" alt="Logo Dev Daniel Jorge" /></a></div>
    <h1>
        Briefing de Criação de Site
    </h1>
    <h2>Olá!</h2>
    <h3>Para começarmos o desenvolvimento do seu site, por favor preencha as informações abaixo com o máximo de detalhes. Essas respostas vão me ajudar a entender seu negócio, seu público e o resultado que você deseja alcançar. Leva poucos minutos e faz toda a diferença para criarmos algo alinhado à sua marca.</h3>
   {status !== 'success' ? (
   <form ref={form} onSubmit={sendEmail}>
    <label>
    <input type="text" name="name" placeholder='Digite o seu nome' required />
    </label>
    <label>
    <input type="email" name="email" placeholder='Digite o seu email' required />
    </label>
    <label>
    <input type="text" name="empresa" placeholder='Nome da empresa' required />
    </label>
    <label>
    <input type="text" name="segmento" placeholder='Segmento de atuação' required /> 
    </label>
    <label>
    <input type="text" name="cidade_estado" placeholder='Digite sua Cidade e seu Estado' required />
    </label>
    <label>
    <input type='text' name='site_atual' placeholder='Possui site atual? Se sim, informe o link' />
    </label>
    <label>
    <textarea name="objetivo_site" placeholder='Quais são os principais objetivos que você deseja alcançar com o novo site?' required ></textarea>
    </label>
    <label>
    <input type="text" name="publico_alvo" placeholder='Descreva o público-alvo do seu site.' required />
    </label>
    <label>
    <input type="text" name="identidade_visual" placeholder='Sua empresa jǭ possui uma identidade visual definida? (logotipo, cores, tipografia)' required />
    </label>
    <label>
    <input type="text" name="cores_usadas" placeholder='Quais cores você gostaria de usar no site?' required />
    </label>
    <label>
    <input type="text" name='texto_img' placeholder='Já Possui os textos e Imagens do Site?' required />
    </label>
    <label>
    <input type='text' name="criacao_texto" placeholder='Precisa de ajuda na criação dos textos para o site?' required />
    </label>
    <label>
    <textarea name="inspiracao" placeholder='Cite até 3 sites que vocǦ gosta ( pode ser concorrentes ou referências de design) '></textarea>
    </label>
    <label>
    <textarea name="observacao" placeholder='Tem alguma observação que você gostaria de pontuar? Essa área é livre pra que você fale algo que precise ou queira para seu site.' ></textarea>
    </label>
    <button type="submit" disabled={status==='sending'}>
      {status==='sending' ? 'Enviando...' : 'Enviar'}
    </button>
   </form>
   ) : (
    <div className="briefing-success-message">
      Obrigado pelas respostas, entrarei em contato para dar continuidade ao projeto.
    </div>
   )}
    
    
    
    
    </div>
  )
}

export default Briefing

