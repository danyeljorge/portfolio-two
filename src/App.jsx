import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import Header from './assets/components/Header'
import './App.css'
import WorkMe from './assets/components/WorkMe'
import About from './assets/components/About'
import Skils from './assets/components/Skils'
import CallToAction from './assets/components/CallToAction'
import Footer from './assets/components/Footer'
import Contatos from './assets/components/Contatos'
import Servicos from './assets/components/Servicos'
import Projetos from './assets/components/Projetos'
import FAQ from './assets/components/FAQ'
import ScrollVelocity from "./assets/components/ScrollVelocity"




function App() {

  
  

  return (
    
      <div>
       
        <Header/>
        <WorkMe/>
        <ScrollVelocity texts={['Desenvolvedor', 'Front-end', 'Back-end', 'Full-Stack']} />
        <About/>
        <Skils/>
        <CallToAction/>
        <Servicos/>
        <Projetos/> 
        <FAQ/>   
        <Contatos/>
        <Footer/>
        <Analytics />
        <SpeedInsights/>
      </div>
    
  )
}

export default App
