import React, { Component } from 'react';

import './loginAndRegister.css'
import Footer from './Footer';
import Header from './Header';
import Center from './Container'


class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Center />
                <Footer />
            </div>
        )
    }
}

export default Index