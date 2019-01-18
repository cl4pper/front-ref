import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Person/Person'
import Person from './components/Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: 'Matts', age: 28 },
            { name: 'Dani', age: 28 },
            { name: 'Nuno', age: 49 }
        ],
        showAges: true,
        agesStorage: []
    }

    changeButton = () => {
        this.setState((state) => {
            state.showAges = !state.showAges
            console.log(this.state.showAges)
        })
    }

    render() {
        return (
            <div className="app">
                {/* PAGE TITLE */}
                <header>
                    <div className="header-text">
                        <h2>List of Persons</h2>
                        <hr/>
                        <h3>A model of React app</h3>
                    </div>
                </header>

                <button onClick={() => this.changeButton()}>{ this.state.showAges ? 'Hide ages' : 'Show Ages' }</button>
                <p>{ toString(this.state.showAges) }</p>

                <section className="content">
                    {/* LIST OF CONTACTS */}
                    <ul className="contact-list">
                        { this.state.persons.map((person) => (
                            <li className="contact" key={person.id}><Person name={person.name} age={person.age}></Person></li>
                        ))}
                    </ul>
                </section>
            </div>
        )
    }
}

export default App