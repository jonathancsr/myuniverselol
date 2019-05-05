import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {BrowserRouter, Route} from 'react-router-dom'

import './loginAndRegister.css'
import Login from './Login'
import Register from './Register'

class Header extends Component {
    render() {
        return (
            
            <div className='BackgroundInitial'>
                <div>
                    <Container>
                        <Row>
                            <Col className='textGoldColor'>Logo</Col>
                            <Col></Col>
                            <Col lg="1"><Register className='buttons' /></Col>
                            <Col lg="1"><Login className='buttons' /></Col>
                        </Row>
                    </Container>
                    <Container className='textCentral'>
                        <Row className="justify-content-md-center  fontFamilySofia  textGoldColor fontBig">
                            <h1>Crie seu próprio universo lol</h1>
                        </Row>
                        <Row className="justify-content-md-center fontSmall fontFamilyLobster textGoldColor">
                           <Col> <p> Personalise e divulgue suas<br />
                        maiores conquistas do mundo de League of Legends. </p>
                        </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                        </Row>
                        <Row className="scrollDown fontFamilySofia">
                            <Col>
                                <a href='#next-section' className='textGoldColor'>Scroll Down</a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Header