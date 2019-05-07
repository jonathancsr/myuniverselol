import React, { Component } from "react";

import Menu from '../IndexPage/menu'
import Flor from './components/flor'
import World from './components/world'

class world extends Component {
    render() {
        return (
            <div>
                <Menu />
                <World />
                <Flor />
            </div>

        )
    }
}

export default world