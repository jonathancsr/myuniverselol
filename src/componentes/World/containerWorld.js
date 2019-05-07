import React, { Component } from "react";

import Character from './character/character'
import Menu from '../IndexPage/menu'
import Container from "react-bootstrap/Container";
import Flor from './components/flor'
import World from './components/world'

class world extends Component {
    render() {
        return (
            <div>
                <Menu />
                <World />
                <Character />
                <Flor />
            </div>

        )
    }
}

export default world