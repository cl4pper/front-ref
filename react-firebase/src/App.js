import React, { Component } from  'react'

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