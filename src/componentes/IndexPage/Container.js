import React, { Component } from "react";

import BackgroundImg from './static/img8.jpg'

class center extends Component{
    
    render(){
        return(
            <div>
                    <section className='section'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-7'>
                                    <img src={BackgroundImg} alt="Imagem 1" className='img-fluid rounded img-shadow'/>
                                    </div>
                                    <div className='col-lg-4 ml-auto'>
                                    <h3 className='mb-3'>About Me</h3>
                                    <p>I'm John Doe a realtor agent, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                                    omnis beatae libero quisquam ex nostrum repellendus, consectetur suscipit. Velit iusto ducimus
                                    sit quos officiis nesciunt libero, officia, aliquam doloremque totam.</p>
                                    <p>Ratione natus expedita iusto, minus cumque vitae quo culpa reiciendis aspernatur aliquam
                                    veritatis magnam non, dicta nemo inventore, nisi quas dolores. Modi laboriosam sunt aliquid rem,
                                    deserunt quis? Porro, hic.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='section visit-section' id='next-section'>
                        <div className='container'>
                            <h2>O que é Lorem Ipsum?</h2>
                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo
                                utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os
                                embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como
                                também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na
                                década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente
                quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>

                            <br/>
                                <h2>De onde ele vem?</h2>
                                <p>Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000
                                    anos,
                                    suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard
                                    McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras
                                    palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações
                                    da
                                    palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e
                                    1.10.33 do 'de Finibus Bonorum et Malorum' (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC.
                                    Este
                                    livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem
                                    Ipsum,
                                    'Lorem Ipsum dolor sit amet...' vem de uma linha na seção 1.10.32.
                    
                                    O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os
                                    interessados. Seções 1.10.32 e 1.10.33 de 'de Finibus Bonorum et Malorum' de Cicero também foram
                                    reproduzidas abaixo em sua forma exata original, acompanhada das versões para o inglês da tradução feita
                                    por
                H. Rackham em 1914.</p>
            </div>
        </section>
    </div>
        )
    }
}

export default center