import React, { Component } from "react";

import './loginAndRegister.css'

class Register extends Component {

    render() {
        return (
            <div className='modal fade' id='modalCadastroForm' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel'
                aria-hidden='true'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content modalLoginRegister'>
                        <div className='modal-body'>
                            <form className='form-signin'>
                                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                                <h2 className='form-signin-heading text-center'>INCREVER-SE</h2>
                                <input type='text' className='form-control' name='name' placeholder='Nome' required=''
                                    autofocus='' />
                                <input type='text' className='form-control' name='username' placeholder='E-mail' required=''
                                    autofocus='' />
                                <input type='password' className='form-control' name='password' placeholder='Senha' required='' />
                                <input type='text' className='form-control' name='nickName' placeholder='Nick Name LOL' required=''
                                    autofocus='' />
                                <button className='btn btn-lg btn-primary btn-block'>Inscrever</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register