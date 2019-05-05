import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


import './loginAndRegister.css'

class Login extends Component {
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
                <Button variant="primary" onClick={this.handleShow}>
                    Launch demo modal
          </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className='form-signin'>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                            <h2 className='form-signin-heading text-center'>LOGIN</h2>
                            <input type='text' className='form-control' name='username' placeholder='E-mail' required=''
                                autofocus='' />
                            <input type='password' className='form-control' name='password' placeholder='Senha' required='' />
                            <label className='checkbox'>
                                <input type='checkbox' value='remember-me' id='rememberMe' name='rememberMe' />
                                Lembrar senha
                                             </label>
                            <button className='btn btn-lg btn-primary btn-block'> <a href='principal.html'> Entrar no My Universe </a>
                            </button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
              </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
              </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

//render(<Login />);

export default Login