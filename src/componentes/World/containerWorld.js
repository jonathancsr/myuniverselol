import React, { Component } from "react";

import Menu from '../IndexPage/menu'
import World from './components/world'
import Floor from './components/floor/floor'
import Sky from './components/sky/sky'


class world extends Component {
    render() {
        return (
            <div>
                <Menu />
                <World />
             </div>
        )
    }
}

export default world