import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

import './loginAndRegister.css'

class Register extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return (
            <>
                <Button variant="secondary mrl-small blueBackgroundColor textGoldColor" onClick={this.handleShow}>
                    Register
                </Button>
                <Modal ref='modal' show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome" /><br />
                            <Form.Label>NickName</Form.Label>
                            <Form.Control type="text" placeholder="NickName" /><br />
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Senha" />
                            </Form.Group>
                            {['checkbox'].map(type => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check inline label="Lembrar senha" type={type} id={`inline-${type}-1`} />
                                </div>
                            ))}
                            <Button variant="primary blueBackgroundColor marginCenter textGoldColor" type="submit">
                                <Link to='/myWorld'> Register </Link>
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default Register