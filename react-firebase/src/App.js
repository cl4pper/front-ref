import React, { Component } from  'react'
import { FIREBASE_BASE } from './firebase'

// STYLES
import './App.scss'

class App extends Component {

    constructor() {
        super()
        this.state = {
            salute: 'Hello, constructor'
        }
    }

    componentDidMount() {
        this.setState({
            salute: 'Hola, componentDidMount'
        })
    }

    render() {
        return (
            <div className="app">
                <h1>{ this.state.salute }</h1>
            </div>
        )
    }
}

export default App