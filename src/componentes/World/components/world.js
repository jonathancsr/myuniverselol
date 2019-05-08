import React, { Component } from 'react'


import Floor from './floor/floor'
import Sky from './sky/sky'
import Character from './../character/character'

class world extends Component {
    
    render() {
        return (
            <div>
                <Sky />
                <Floor />
                <Character/>
            </div>
        )
    }
}

export default world