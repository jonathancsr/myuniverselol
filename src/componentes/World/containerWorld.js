import React, { Component } from "react";

import Menu from '../IndexPage/menu'
import World from './components/world'


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