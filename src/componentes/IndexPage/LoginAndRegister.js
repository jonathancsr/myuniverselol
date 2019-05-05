import React, { Component } from 'react';

import './loginAndRegister.css'
import Footer from './Footer';
import Header from './Header';
import Center from './Container'
import Register from './Register';
import Login from './Login';


class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Center />
                <Register />
                <Login />
                <Footer />
            </div>
        )
    }
}

export default Index