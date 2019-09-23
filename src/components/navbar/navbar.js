import React, { Fragment, useState } from 'react'
import './navbar.css'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../imgs/svg/eXtore'
import LetterLogo from '../../imgs/svg/letterl-logo'
import { useSpring, useTransition, animated } from 'react-spring'
import LogIn from '../../imgs/svg/logIn'



export default function Navbar(props) {
  
   
    console.log(props)


    var items = props.routes.normalRoutes

    const transitions = useTransition(items, item => item.id, {
        from: {
            transform: 'scale(2)',
            opacity: 0,
        },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { display: 'none' }
    })
    
    return (
        <div className='navbar'>

            <NavLink to='/'>
                <Logo />
            </NavLink>


            <ul>
                {transitions.map(({ item, props, key }) => (
                    item.title === "Login" || item.title === "Inicio" ?
                        null :
                        <animated.li key={key} style={{ ...props }} >
                           
                            <NavLink aria-haspopup="true" to={item.url}>
                                {item.title}
                            </NavLink>
                          
                            <ul aria-label="submenu">
                                {item.subComponents.map((subcomp) => (
                                    <li>
                                        <Link to={subcomp.url}>{subcomp.title}</Link>
                                    </li>
                                ))}
                            </ul>
                            
                        </animated.li>
                ))}
            </ul>


           
                <NavLink className="nav-login" to='/login'>
                    <span>entrar</span> <LogIn />
                </NavLink>}


        </div>
    )
}
