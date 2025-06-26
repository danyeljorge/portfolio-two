import './Projetos.css'
import MediaCard from './MediaCard'
import projetosCard from '../data/projetosCard'

const Projetos = () => {
  return (
    <div className='conteinerPrincipalProjetos' id='projetos'>
      <div className="conteinerProjetos">
      {projetosCard.map(projeto => (
        <MediaCard 
        key={projeto.id}
        title={projeto.title}
        description={projeto.description}
        image={projeto.image}
        deploy={projeto.deploy}
        github={projeto.github} 
        />
      ))}
    
    <div className="divisor"></div>

    </div>
<a className='maisProjetos' href="https://github.com/danyeljorge?tab=repositories" target='_blank'>+ PROJETOS</a>
    </div>
  )
}

export default Projetos