import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'


import './loginAndRegister.css'
import Register from './Register'
import Login from './Login'
import logo from './static/logo.png'

class menu extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" className="justify-content-between" bg="dark" variant="dark">
                    <Navbar.Brand><Link className='textGoldColor' to='/'><img className='logo'  src={logo}/></Link></Navbar.Brand>
                    <Navbar.Brand >
                        <Register />
                        <Login />
                    </Navbar.Brand>
                </Navbar>
                <br />
            </>
        )
    }
}

export default menu