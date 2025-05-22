import React from 'react'
import {Accordion, AccordionItem} from "@heroui/accordion";
import "./FAQ.css"

const perguntas = [
  {
    id: 1,
    pergunta: "Você trabalha com quais tecnologias?",
    resposta: "Atualmente, foco em HTML5, CSS3, JavaScript, React e Git. Também tenho experiência com WordPress e boas práticas de responsividade"
  },

  {
    id: 2,
    pergunta: "Você desenvolve sites responsivos?",
    resposta: "Sim! Todos os meus projetos são 100% responsivos, adaptando-se perfeitamente a celulares, tablets e desktops."
  },

  {
    id: 3,
    pergunta: "Você faz o design do site também?",
    resposta: "Posso sim montar o layout, especialmente com ferramentas como Figma. No entanto, se houver um designer na equipe, trabalho perfeitamente com o material fornecido."
  },
   {
    id: 4,
    pergunta: "Você consegue integrar APIs ao front-end?",
    resposta: "Sim, integro diversas APIs REST em projetos com JavaScript e React para exibir dados dinâmicos, autenticação, etc."
  },
   {
    id: 5,
    pergunta: "Você entrega o projeto completo ou apenas a parte visual?",
    resposta: "Depende da necessidade. Posso entregar apenas o front-end ou colaborar com outros profissionais para projetos completos."
  },

  {
    id: 6,
    pergunta: "Qual é o seu prazo médio para entregar um site?",
    resposta: "Depende da complexidade do projeto. Sites institucionais simples podem levar até 7 dias úteis. Projetos maiores são avaliados caso a caso."
    },

  {
    id: 7,
    pergunta: "Você está disponível para freelas ou apenas para vagas fixas?",
    resposta: "Atualmente estou aberto tanto para oportunidades de estágio e emprego fixo quanto para projetos freelancers."
  },

  {
    id: 8,
    pergunta: "Você emite nota fiscal ou contrato de prestação de serviços?",
    resposta: "Ainda não emito nota fiscal, mas posso fornecer um contrato simples de prestação de serviços se necessário"
  },

  {
    id: 9,
    pergunta: "Você tem experiência real com projetos?",
    resposta: "Sim! Já desenvolvi projetos pessoais, sites institucionais, e estou constantemente melhorando meu portfólio com aplicações reais."
  },

  {
    id: 10,
    pergunta: "Você trabalha com SEO ou performance de sites?",
    resposta: "Tenho conhecimentos básicos de SEO on-page e otimização de performance, e aplico boas práticas sempre que possível."
  },
  
]

import "./FAQ.css"
const FAQ = () => {



  return (
    <div className='PrincipalFAQ' id='faq'>
      <h1 className='tituloFaq'>Preguntas Frequentes - FAQ</h1>
      <div className='containerFaq'>

      <Accordion className='accordion'
      
      showDivider={false}
      variant="shadow">
        {perguntas.map((item) => (
          <AccordionItem className='accordionItem'
           key={item.id}
           title={item.pergunta}
           textValue={item.resposta}
           
           >
            <p>{item.resposta}</p>


</AccordionItem>
        ))}
        

          
          </Accordion>

        </div>
    </div>
  )
}

export default FAQ