import React, { Component } from 'react';
import Navbar, { Nav } from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'


import './loginAndRegister.css'
import Register from './Register'
import Login from './Login'

class menu extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" className="justify-content-between" bg="dark" variant="dark">
                    <Navbar.Brand><Link className='textGoldColor' to='/'>HOME</Link></Navbar.Brand>
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