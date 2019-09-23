import React, { useState } from 'react'
import './about.css'
import { Link } from 'react-router-dom'



export default function About() {



    return (
        <div className="about">
            <header>
                <h1>Sobre Excale</h1>
            </header>

            <div className="notes">
                <p>Excale foi desenvolvida para empresas que desejam realizar vendas online através de e-commerce. A plataforma oferece ferramentas agéis. Através de inteligencia artificial identificamos produtos, prevemos padrões e organizamos os dados de forma fácil e entendivel</p>

                <p>
                Excale foi arquitetada por técnologias e serviços conhecidos e seguros, como GoogleCloud e IBM-Watson. Nós atualizamos a plataforma mensalmente para melhor adaptar-se ao mercado e promover performace, design e automação.
                </p>

                <p>
                Excale foi criada por Leone de Souza, backend-engineer, a partir da necessidade de um sistema para automatizar o gerênciamento de seu e-commerce. 
                </p>
            </div>

            <br/> <br/> <br/>

            <div className="wrapper">

                <div className="container">
                    <div className="box">
                        <p>Nossos desenvolvedores criam ferramentas com a melhor performace, design e segurança. </p>
                    </div>
        

                    <div className="box"> <p>Para começar, <Link>crie um cadastro</Link> e já poderá usar a plataforma, você não paga nada! Para ativar o plano premium entre em contato conósco! </p> </div>
         

                
                    <div className="box"> <p>Nosso sistema torna técnologia acessivel, é para isso que existimos</p> </div>


     
                    <div className="box"> <p>Você pode espeficiar uma necessidade do seu nicho de negócio para ser acrescentada como ferramente na Excale. Entre em <Link>contato</Link>. </p> </div>

                </div>

            </div>


            <br/> <br/> <br/>
            <br/> <br/> <br/>
            <br/> <br/> <br/>
            <br/> <br/> <br/>

            <div className="our-values">
                <div className="box">
                    Transparencia
                   Estamos sempre a disposição, a eXcale é um robo, mas quem está por trás são <Link>nossos desenvolvedores</Link> !
               </div>

                <div className="box">
                    Auto-Melhoramento

                   <p>Nunca paramos de aprender, sempre melhorar o que já somos, é isso que a eXcale respira! </p>
                </div>

                <div className="box">
                    Criatividade

                   <p>Entregamos aplicações criativas e modernas para nossos <Link> clientes</Link> </p>
                </div>

                <div className="box">
                    Simplicidade

                <p>Combinação de técnologias avançadas e fácilidade de uso</p>
                </div>
            </div>


            <div className="perfil">

                <h3>Leone de Souza</h3>
                <p>Software Enginier</p>

                <p> Olá, eu sou o criador da eXcale, me encontre nas redes sociais:</p>

                GITHUB || YOUTUBE || TWITTER || FACEBOOK || LINKEDIN

            </div>

        </div>
    )
}
