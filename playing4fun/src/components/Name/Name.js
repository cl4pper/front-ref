// THIS COMPONENT IS USED INSIDE PERSON COMPONENT

import React, { Component } from 'react'

// STYLE
import './Name.css'

class Name extends Component {

    render() {
        return (
            <p className="name">
                <strong>{ this.props.name }</strong>
            </p>
        )
    }
}

export default Name