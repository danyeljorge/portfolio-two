import React from 'react'
import './WorkMe.css'

const WorkMe = () => {
  return (
    <>
    <section className="conteinerWork">
      <div className="fundoElemento"></div> 
        <div className="imgWork">
        <img src="/clientes.png" alt="" />
       </div>
       <div className="workMe">
        <div className="workMe-0">
          <p  className='descricaoWorkMe'>Por que trabalhar comigo?</p><h2 className='tituloWorkMe'>Minhas <br /> Vantagens </h2>
          
        </div>
        <div className="whyChooseMe">
            <p>Por que me Escolher</p>
          </div>
        <div className="workMe-1">
        <i class="bi bi-award-fill iconWorkMe"></i>
          <div><h4>Qualidade e Evolução</h4>
        <p className='descricaoWorkMe1'>Sou apaixonado por tecnologia e estou sempre aprendendo para entregar 
          soluções modernas, eficientes e alinhadas com as melhores práticas do mercado.</p>
          </div>
          </div>
        <div className="workMe-2">
        <i class="bi bi-kanban-fill iconWorkMe"></i>
        <div><h4>Projetos Personalizados</h4>
        <p className='descricaoWorkMe2'>Cada projeto é único. Eu me dedico a entender suas necessidades para criar
           experiêncuas personalizadas, com foco em usabilidade, perfomance e design.</p>
           </div>
           </div>
       </div>
       </section>
    </>
  )
}

export default WorkMe