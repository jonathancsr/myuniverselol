import React, { Component } from 'react'


import Floor from './floor/floor'
import Sky from './sky/sky'
import Widgets from './widgets'
import Character from './../character/character'

class world extends Component {
    
    render() {
        return (
            <div>
                <Sky />
                <Widgets />
                <Floor />
                <Character/>
            </div>
        )
    }
}

export default world