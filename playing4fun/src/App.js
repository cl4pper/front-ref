import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Person/Person'
import Person from './components/Person/Person';

class App extends Component {

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

                <div className="content">
                    {/* LIST OF CONTACTS */}
                    <ul className="contact-list">
                        <li className="contact"><Person name="Matts" age="25"></Person></li>
                        <li className="contact"><Person name="Bryan" age="20"></Person></li>
                        <li className="contact"><Person name="Jose" age="31"></Person></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default App