import React, {Component} from 'react'

class world extends Component
{
    componentDidMount(){
        const world = this.refs.world
        world.style.minHeigt = '70%';
        world.style.backgroundColor = 'blue';
    }


    render(){
        return(
            <div ref='world'>aesdfghjio876trdcvbhjuy76rtd</div>
        )
    }
}

export default world