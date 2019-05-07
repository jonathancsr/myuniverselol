import React, { Component } from 'react'


import Floor from './floor/floor'
import Sky from './sky/sky'

class world extends Component {
    
    render() {
        return (
            <div>
                <Sky />
                <Floor />
            </div>
        )
    }
}

export default world