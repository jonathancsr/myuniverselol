import React, { Component } from "react";

import Character from './character/character'
import Menu from '../IndexPage/menu'
import Container from "react-bootstrap/Container";

class world extends Component {
    render() {
        return (
            <Container>
                <Menu />
                <Character />
            </Container>
        )
    }
}

export default world