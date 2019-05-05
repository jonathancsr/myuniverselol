import React, { Component } from 'react';

import './loginAndRegister.css'

class Header extends Component {
    render() {
        return (
            <section className='BackgroundInitial site-hero overlay'>
                <div className='container'>
                    <div className='row site-hero-inner align-items-center'>
                        <div className='col text-left' style={{ marginLeft: 150 }}>
                            <h5 className='heading' data-aos='fade-up'>Crie seu próprio universo Lol</h5>
                            <p className='sub-heading mb-5' data-aos='fade-up' data-aos-delay='100'> Personalise e divulgue suas
                        maiores conquistas do mundo Lol. </p>
                            <p data-aos='fade-up' data-aos-delay='100'><a href='#cadastro' style={{ marginLeft: 150 }}
                                className='btn uppercase btn-primary mr-md-2 mr-0 mb-3 d-sm-inline d-block' data-toggle='modal'
                                data-target='#modalCadastroForm'>INSCREVER-SE</a> <a
                                    className='btn uppercase btn-light d-sm-inline d-block' data-toggle='modal'
                                    data-target='#modalLoginForm'>ENTRAR</a></p>
                        </div>
                    </div>
                    <a href='#next-section' className='smoothscroll scroll-down'>Scroll Down</a>
                </div>
            </section>
        )
    }
}

export default Header