import React, {Component} from 'react'

import './widgets.css'

import Gallery from './widgets/gallery/Gallery'
let widgetsList;

class widgets extends Component
{
    componentDidMount(){

    }

    render(){
        return(
            <div className='containerWidgets' ref='containerWidgets'>
                <ul className="ul-widgets">
                    <li>
                        <Gallery></Gallery>
                    </li>
                    
                </ul>
            </div>
        )
    }
}

export default widgets