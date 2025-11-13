import React from 'react'
import './Price.css'

const Price = () => {
  return (
    <div className='conteinerPrice price' id='price'>

        <div className="tituloPrice">
            <h1>Planos de Assinatura</h1>
            <p>Escolha o plano que melhor se adapta ao seu negócio.</p>
        </div>


        <div className="priceConteiner">
            <div className="priceContent">

            <div className='tituloPlano'>
                <h1>Starter Web</h1>
                <img className='imgPrice' src="/price.webp" />
            </div>
            <div className="pricePlano">
                <h1>R$ 99,90<span>/mês</span></h1>
            </div>
            <div className="recursos">
                <h1>Recursos</h1>
                <ul>
                    <li><i class="bi bi-check2"></i> Criação de Site (até 5 páginas)</li>
                    <li><i class="bi bi-check2"></i> Hospedagem gratuita</li>

                </ul>

            </div>
            <div className="p">Ideal para início rápido</div>
            <div className="buttonPrice">
                <a href="https://wa.me/5521998452350?text=Ol%C3%A1%2C%20gostaria%20tenho%20interesse%20no%20Plano%20Starter%20Web." target="_blank">Assinar Agora</a>
            </div>
            </div>



            <div className="priceContent price2">

            <div className='tituloPlano'>
                <h1>Business Web</h1>
                <img className='imgPrice' src="/price.webp" />
            </div>
            <div className="pricePlano">
                <h1>R$ 89,90<span>/semestral</span></h1>
            </div>
            <div className="recursos">
                <h1>Recursos</h1>
                <ul>
                    <li><i class="bi bi-check2"></i> Tudo do Plano Starter</li>
                    <li><i class="bi bi-check2"></i> Dominio Gratuito durante o contrato</li>
                    <li><i class="bi bi-check2"></i> Manunteção Regular</li>
                    <li><i class="bi bi-check2"></i> Suporte Prioritário</li>

                </ul>

            </div>
           
            <div className="buttonPrice recomendado">
                <a href="https://wa.me/5521998452350?text=Ol%C3%A1%2C%20gostaria%20tenho%20interesse%20no%20Plano%20Business%20Web." target="_blank">Assinar Agora</a>
            </div>

<div className='recommended'> Recomendado</div>
            </div>
            <div className="priceContent">

             <div className='tituloPlano'>
                <h1>Elite Web</h1>
                <img className='imgPrice' src="/price.webp" />
            </div>
            <div className="pricePlano">
                <h1>R$ 79,90<span>/anual</span></h1>
            </div>
            <div className="recursos">
                <h1>Recursos</h1>
                <ul>
                    <li><i class="bi bi-check2"></i> Tudo do Plano Business</li>
                    <li><i class="bi bi-check2"></i> 1-3 Caixas de E-mail</li>
                    <li><i class="bi bi-check2"></i> Atulizações Constantes</li>
                    <li><i class="bi bi-check2"></i> Suporte Vip(Resposta Rápida)</li>

                </ul>

            </div>
            
            <div className="buttonPrice">
                <a href="https://wa.me/5521998452350?text=Ol%C3%A1%2C%20gostaria%20tenho%20interesse%20no%20Plano%20Elite%20Web." target="_blank">Assinar Agora</a>
            </div>

            </div>
        </div>


<div className="divisorTop"></div>
    
    </div>
  )
}

export default Price