import React, {Fragment} from 'react'
import Particles from 'react-particles-js';
import './home.css'



export default function home() {
    return (
          <Fragment>
                <div className="App-header">

                    <div className="header-text">
                        <h3>Abra o seu negócio<br />
                            <span> acredite - planeje - faça </span>
                            <br /> </h3>

                        <button>Começar a avaliação de 14 dias</button>
                    </div>
                </div>

                <Particles
                    className="particle"
                    params={{
                        particles: {
                            number: {
                                value: 150,
                                density: {
                                    enable: true,
                                    value_area: 1100
                                }
                            }
                        }
                    }}
                />
            </Fragment>
    )
}

