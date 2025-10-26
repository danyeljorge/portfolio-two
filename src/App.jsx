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
import Price from "./assets/components/Price"
import Projetos from './assets/components/Projetos'
import FAQ from './assets/components/FAQ'
import ScrollVelocity from "./assets/components/ScrollVelocity"
import { useState, useEffect } from "react"
import Loader from "./assets/components/Loader"




function App() {

  const [carregamento, setCarregamento] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCarregamento(false), 3000);
    return () => clearTimeout(timer);
  },[]);
  if (carregamento) return <Loader/>
  
  

  return (
    
      <div>
       
       
        <Header/>
        <WorkMe/>
        <ScrollVelocity texts={['Front-end', 'Back-end', 'Full-Stack']} />
        <About/>
        <Skils/>
        <CallToAction/>
        <Price/>
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
