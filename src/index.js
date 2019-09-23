import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css'
import { BrowserRouter as Router } from 'react-router-dom';

//Routes
//Public Components
import Pricing from './components/normal/pricing/price'
import Contact from './components/normal/contact/contact'
import About from './components/normal/sub-menus/about/about'

//Começar :/
import Home from './components/normal/home/home'
import ML from './components/normal/sub-menus/starting/mercadolivre'
import Store from './components/normal/sub-menus/starting/store'
import Themes from './components/normal/sub-menus/starting/themes'
import Web from './components/normal/sub-menus/starting/web'

//Ferramentas :/
import AI from './components/normal/sub-menus/features/ai'
import Analysis from './components/normal/sub-menus/features/analysis'
import Assistant from './components/normal/sub-menus/features/assistant'
import Overview from './components/normal/sub-menus/features/overview'
import SalesChannels from './components/normal/sub-menus/features/salesChannels'
import Services from './components/normal/sub-menus/features/services'

//Promover :/
import Promotion from './components/normal/sub-menus/promotion/promotion'
import Facebook from './components/normal/sub-menus/promotion/facebook'
import Google from './components/normal/sub-menus/promotion/google'
import Youtube from './components/normal/sub-menus/promotion/youtube'
import SEO from './components/normal/sub-menus/promotion/seo'


var normalRoutes = [
    {
      id: 6,
      title: 'Começar',
      classname: '',
      url: "/",
      component: Home,
      subComponents: [
        {
          id: 44,
          title: 'Endereço Web',
          classname: '',
          url: "/ecommerce",
          component: Web
        },
        {
          id: 44,
          title: 'Loja Virtual',
          classname: '',
          url: "/loja-virtual",
          component: Store
        },
        {
          id: 44,
          title: 'Temas de Lojas',
          classname: '',
          url: "/temas-loja-virtual",
          component: Themes
        },
        {
          id: 44,
          title: 'Sincronize MercadoLivre',
          classname: '',
          url: "/sincronizar-mercado-livre",
          component: ML
        }]
    },

    {
      id: 8,
      title: 'Ferramentas',
      classname: '',
      url: "/overview",
      component: Overview,
      subComponents: [
        {
          id: 44,
          title: 'Visão Geral',
          classname: '',
          url: "/overview",
          component: Overview
        },
        {
          id: 44,
          title: 'Canais de Vendas',
          classname: '',
          url: "/canais-de-venda",
          component: SalesChannels
        },
        {
          id: 44,
          title: 'Analise de dados',
          classname: '',
          url: "/analise-de-dados",
          component: Analysis
        },
        {
          id: 44,
          title: 'Assistant',
          classname: '',
          url: "/chat-box",
          component: Assistant
        },
        {
          id: 44,
          title: 'Inteligência Artificial',
          classname: '',
          url: "/inteligencia-artificial",
          component: AI
        },
        {
          id: 44,
          title: 'Serviços Adicionais',
          classname: '',
          url: "/",
          component: Services
        }],
    },

    {
      id: 10,
      title: 'Promover',
      url: "/promover",
      component: Promotion,
      subComponents: [
        {
          id: 44,
          title: 'SEO',
          classname: '',
          url: "/SEO",
          component: SEO
        },
        {
          id: 44,
          title: 'Anuncios no Facebook',
          classname: '',
          url: "/promover-facebook",
          component: Facebook
        },
        {
          id: 44,
          title: 'Anuncios no Youtube',
          classname: '',
          url: "/promover-youtube",
          component: Youtube
        },
        {
          id: 44,
          title: 'Anuncios no Google',
          classname: '',
          url: "/promover-google",
          component: Google
        }]
    },

    {
      id: 11,
      title: 'Preços',
      classname: '',
      url: "/ecommerce-preços",
      component: Pricing,
      subComponents: [],
    },

    {
      id: 9,
      title: 'Sobre',
      url: "/about",
      component: About,
      subComponents: [
        {
          id: 44,
          title: 'A Empresa',
          classname: '',
          url: "/about",
          component: About
        },
        {
          id: 44,
          title: 'A Equipe',
          classname: '',
          url: "/about",
          component: About
      },{
        id: 44,
        title: 'Contato',
        classname: '',
        url: "/about",
        component: Contact
    },]
    }
  
  ]


ReactDOM.render(
    <Router>
        <App normalRoutes={normalRoutes}/>
    </Router>, document.getElementById('root'));

