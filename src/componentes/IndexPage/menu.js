import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

import './loginAndRegister.css'
import Login from './Login'
import Register from './Register'

class menu extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className='textGoldColor'><Link to='/'>Logo</Link></Col>
                    <Col></Col>
                    <Col lg="1"><Register className='buttons' /></Col>
                    <Col lg="1"><Login className='buttons' /></Col>
                </Row>
            </Container>
        )
    }
}

export default menu