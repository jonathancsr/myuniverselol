import React, { Component } from 'react'


import Floor from './floor/floor'
import Sky from './sky/sky'
import Widgets from './widgets'

class world extends Component {
    
    render() {
        return (
            <div>
                <Sky />
                <Widgets />
                <Floor />
            </div>
        )
    }
}

export default world