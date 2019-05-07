import React, { Component } from 'react'
import './flor.css'

class flor extends Component {

    componentDidMount(backgroundRef) {
        const flor = this.refs.flor;
        flor.style.backgroundImage = backgroundRef;
        flor.style.backgroundColor = 'red';
        flor.style.top = '100em';
        flor.style.width = '100%';
    }

    render() {
        return (
            <div ref='flor'>dasgs</div>
        )
    }
}

export default flor